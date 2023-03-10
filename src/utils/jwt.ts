import { jwtConfig } from '../config/config';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  roleId: number;
  email: any;
}

export const sign = (payload: any, options = { expiresIn: jwtConfig.expiry + 'h' }) => {
  return jwt.sign(payload, jwtConfig.secret, options);
};

export const verify = (token: string) => {
  try {
    const decoded = jwt.verify(token, jwtConfig.secret) as JwtPayload;
    return { valid: true, expired: false, decoded };
  } catch (error) {
    console.log('token', token, { error });
    let msg;
    if (error instanceof Error) {
      msg = error.message;
    } else {
      msg = error;
    }
    return {
      valid: false,
      expired: msg === 'jwt expired',
      msg: msg,
      decoded: null as null
    };
  }
};
