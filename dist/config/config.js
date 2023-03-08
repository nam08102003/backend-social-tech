"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpConfig = exports.emailConfig = exports.jwtConfig = exports.dbConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.dbConfig = {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: process.env.DATABASE_TYPE
};
exports.jwtConfig = {
    secret: process.env.SECRET,
    expiry: process.env.TOKEN_EXPIRY_HOUR,
    saltRound: 4
};
exports.emailConfig = {
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
exports.otpConfig = {
    otpExpiry: process.env.OTP_EXPIRY_MIN,
    otpSecret: process.env.OTP_SECRET
};
//# sourceMappingURL=config.js.map