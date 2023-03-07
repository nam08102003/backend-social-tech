"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.generateOTP = void 0;
const otplib_1 = require("otplib");
const config_1 = require("../config/config");
const expireOTPInSeconds = 60 * parseInt(config_1.otpConfig.otpExpiry);
otplib_1.authenticator.options = {
    step: expireOTPInSeconds,
    digits: 6
};
const generateOTP = (email) => {
    const secret = email + config_1.otpConfig.otpSecret;
    return otplib_1.authenticator.generate(secret);
};
exports.generateOTP = generateOTP;
const verifyOTP = (email, otp) => {
    const secret = email + config_1.otpConfig.otpSecret;
    return otplib_1.authenticator.verify({ secret, token: otp });
};
exports.verifyOTP = verifyOTP;
//# sourceMappingURL=otp.js.map