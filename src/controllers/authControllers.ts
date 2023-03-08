import {
  createUser,
  userExists,
  findOneUser,
  validatePassword,
  updateUserById
} from '../services/userServices';
import { Request, Response } from 'express';
import ValidationErrors from '../errors/ValidationErrors';
import { sign, verify } from '../utils/jwt';
import { omit } from 'lodash';
import { generateOTP, verifyOTP } from '../utils/otp';
import { sendOTP } from '../helpers/mailHelper';
import { registerUserTemplate, forgotPasswordMailTemplate } from '../helpers/mailTemplate';
import { TITLE_MAIL_REGISTER, TITLE_MAIL_FORGETPASSWORD } from '../constants/index';
import moment from 'moment-timezone';

const omitField = ['password'];

export const registerUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const userExist = await userExists({ email: data?.email });

    if (userExist) {
      res.status(400).json({
        success: false,
        message: 'Tài khoản đã tồn tại'
      });
    }

    const newUser = await createUser(data);

    if (newUser) {
      const otp = generateOTP(data?.email);

      const sendOtpMail = await sendOTP(
        data?.email,
        otp,
        TITLE_MAIL_REGISTER,
        registerUserTemplate
      );

      if (!sendOtpMail) {
        res.status(400).json({
          success: false,
          message: 'Có lỗi. Vui lòng thử lại'
        });
      }
    }
    const userData = omit(newUser?.toJSON(), omitField);
    const accessToken = sign({ ...userData });

    res.status(200).json({
      success: true,
      message: 'Đăng ký tài khoản thành công',
      accessToken,
      result: userData
    });
  } catch (err) {
    console.log(err);
    if (err) throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userExist = await findOneUser({ email });

    if (!userExist) {
      res.status(400).json({
        success: false,
        message: 'Tài khoản không tồn tại. Vui lòng đăng ký tài khoản'
      });
    }
    const validatePw = await validatePassword(email, password);

    if (!validatePw) {
      res.status(400).json({
        success: false,
        message: 'Sai mật khẩu'
      });
    }

    const userData = omit(userExist?.toJSON(), omitField);
    const accessToken = sign({ ...userData });

    res.status(200).json({
      success: true,
      message: 'Đăng nhập thành công',
      accessToken,
      result: userData
    });
  } catch (err) {
    console.log(err);
    if (err) throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    const userExist = await findOneUser({ id: userId });

    if (!userExist) {
      res.status(400).json({
        success: false,
        message: 'Tài khoản không tồn tại'
      });
    }

    const dateCurrent = moment().tz('Asia/Jakarta').format();
    console.log(dateCurrent);

    const updateUser = await updateUserById({ lastLogin: dateCurrent }, userId);

    if (updateUser) {
      res.status(200).json({
        success: true,
        message: 'Đăng xuất thành công'
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Đăng xuất thất bại'
      });
    }
  } catch (err) {
    console.log(err);
    if (err) throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
  }
};

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const findUser = await findOneUser({ email });
    if (!findUser) {
      res.status(400).json({
        success: false,
        message: 'Tài khoản không tồn tại'
      });
    }

    const otp = generateOTP(email);

    const sendOtpMail = await sendOTP(
      email,
      otp,
      TITLE_MAIL_FORGETPASSWORD,
      forgotPasswordMailTemplate
    );

    if (!sendOtpMail) {
      res.status(400).json({
        success: false,
        message: 'Có lỗi. Vui lòng thử lại'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Chúng tôi đã gửi mã OTP tới email của bạn. Vui lòng kiểm tra và nhập chính xác '
    });
  } catch (err) {
    console.log(err);
    if (err) throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { password, email, otp } = req.body;

    const findUser = await findOneUser({ email });
    if (!findUser) {
      res.status(400).json({
        success: false,
        message: 'Tài khoản không tồn tại'
      });
    }

    const verify = verifyOTP(email, otp);

    if (!verify) {
      res.status(400).json({
        success: false,
        message: 'Mã OTP sai vui lòng kiểm tra lại mã'
      });
    }

    const updatePassword = await updateUserById({ password }, findUser?.id);

    if (!updatePassword) {
      res.status(400).json({
        success: false,
        message: 'Có Lỗi. Vui lòng thử lại'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Thay đổi mật khẩu thành công'
    });
  } catch (err) {
    console.log(err);
    if (err) throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
  }
};

export const verifyOtpRegister = async (req: Request, res: Response) => {
  try {
    const { userId, otp } = req.body;

    const user = await findOneUser({ id: userId });

    const verify = verifyOTP(user?.email, otp);

    if (!verify) {
      res.status(400).json({
        success: false,
        message: 'Mã OTP sai vui lòng kiểm tra lại mã'
      });
    }

    const updateStatusUser = await updateUserById({ status: 1 }, userId);

    if (!updateStatusUser) {
      res.status(400).json({
        success: false,
        message: 'Có Lỗi. Vui lòng thử lại'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Mã OTP chính xác'
    });
  } catch (err) {
    console.log(err);
    if (err) throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
  }
};

export const getInfoUserByToken = async (req: Request, res: Response) => {
  try {
    const { accesstoken } = req.headers;
    if (!accesstoken) {
      res.status(400).json({
        success: false,
        message: 'Có lỗi. Vui lòng đăng nhập lại'
      });
    }

    const dataDecode = verify(String(accesstoken));

    if (!dataDecode) {
      res.status(400).json({
        success: false,
        message: 'Có lỗi. Vui lòng đăng nhập lại'
      });
    }

    const { id } = dataDecode?.decoded;

    const dataUser = await findOneUser({ id });

    const userData = omit(dataUser?.toJSON(), omitField);

    res.status(200).json({
      success: true,
      message: 'Thành công',
      result: userData,
      accessToken: accesstoken
    });
  } catch (err) {
    console.log(err);
    if (err) throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
  }
};
