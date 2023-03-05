import {
  createUser,
  userExists,
  findOneUser,
  validatePassword,
  updateUserById
} from '../services/userServices';
import { Request, Response } from 'express';
import ValidationErrors from '../errors/ValidationErrors';
import { sign } from '../utils/jwt';
import { omit } from 'lodash';

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

    const dateCurrent = new Date().toLocaleDateString();

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
    throw new ValidationErrors('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
  }
};
