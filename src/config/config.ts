import dotenv from 'dotenv';
import { Dialect } from 'sequelize';

dotenv.config();

export const dbConfig = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  dialect: process.env.DATABASE_TYPE as Dialect
};

export const jwtConfig = {
  secret: process.env.SECRET,
  expiry: process.env.TOKEN_EXPIRY_HOUR,
  saltRound: 4
};

export const emailConfig = {
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASSWORD,
  emailFrom: process.env.EMAIL_FROM,
  clientId: process.env.EMAIL_CLIENTID,
  clientSecret: process.env.EMAIL_CLIENTSECRET,
  accessToken: process.env.EMAIL_ACCESSTOKEN,
  refreshToken: process.env.EMAIL_REFRESHTOKEN,
  expiry: process.env.EMAIL_TOKEN_EXPIRY
};

export const otpConfig = {
  otpExpiry: process.env.OTP_EXPIRY_MIN,
  otpSecret: process.env.OTP_SECRET
};
