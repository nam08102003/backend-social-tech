import bcryptjs from 'bcryptjs';
import { jwtConfig } from '../config/config';

export const encryptAsync = (password: string) => {
  return bcryptjs.hash(password, jwtConfig.saltRound);
};

export const encryptSync = (password: string) => {
  return bcryptjs.hashSync(password, jwtConfig.saltRound);
};

export const compareSync = (password: string, hash: string) => {
  return bcryptjs.compareSync(password, hash);
};

export const compareAsync = (password: string, hash: string) => {
  return bcryptjs.compare(password, hash);
};
