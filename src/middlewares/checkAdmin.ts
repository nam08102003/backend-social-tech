import { Request, Response, NextFunction } from 'express';
import ValidationErrors from '../errors/ValidationErrors';
import { verify } from '../utils/jwt';

const checkAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.headers;
    if (!token) {
      res.status(400).json({
        success: false,
        message: 'Không có thông tin token'
      });
    }

    const dataDecoded = verify(String(token));

    if (!dataDecoded) {
      res.status(400).json({
        success: false,
        message: 'Không có thông tin token'
      });
    }

    const { roleId } = dataDecoded?.decoded;

    if (Number(roleId) === 0) {
      console.log('Next');
      next();
    } else {
      res.status(400).json({
        success: false,
        message: 'Tài khoản không có quyền thực hiện chức năng này'
      });
    }
  } catch (err) {
    console.log(err);
    throw new ValidationErrors('Có lỗi. Vui lòng thử lại', 'errors');
  }
};

export default checkAdmin;
