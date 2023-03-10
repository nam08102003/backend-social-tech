"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtpRegister = exports.resetPassword = exports.forgetPassword = exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const userServices_1 = require("../services/userServices");
const ValidationErrors_1 = __importDefault(require("../errors/ValidationErrors"));
const jwt_1 = require("../utils/jwt");
const lodash_1 = require("lodash");
const otp_1 = require("../utils/otp");
const mailHelper_1 = require("../helpers/mailHelper");
const mailTemplate_1 = require("../helpers/mailTemplate");
const index_1 = require("../constants/index");
const omitField = ['password'];
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const userExist = yield (0, userServices_1.userExists)({ email: data === null || data === void 0 ? void 0 : data.email });
        if (userExist) {
            res.status(400).json({
                success: false,
                message: 'Tài khoản đã tồn tại'
            });
        }
        const newUser = yield (0, userServices_1.createUser)(data);
        if (newUser) {
            const otp = (0, otp_1.generateOTP)(data === null || data === void 0 ? void 0 : data.email);
            const sendOtpMail = yield (0, mailHelper_1.sendOTP)(data === null || data === void 0 ? void 0 : data.email, otp, index_1.TITLE_MAIL_REGISTER, mailTemplate_1.registerUserTemplate);
            if (!sendOtpMail) {
                res.status(400).json({
                    success: false,
                    message: 'Có lỗi. Vui lòng thử lại'
                });
            }
        }
        const userData = (0, lodash_1.omit)(newUser === null || newUser === void 0 ? void 0 : newUser.toJSON(), omitField);
        const accessToken = (0, jwt_1.sign)(Object.assign({}, userData));
        res.status(200).json({
            success: true,
            message: 'Đăng ký tài khoản thành công',
            accessToken,
            result: userData
        });
    }
    catch (err) {
        console.log(err);
        if (err)
            throw new ValidationErrors_1.default('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userExist = yield (0, userServices_1.findOneUser)({ email });
        if (!userExist) {
            res.status(400).json({
                success: false,
                message: 'Tài khoản không tồn tại. Vui lòng đăng ký tài khoản'
            });
        }
        const validatePw = yield (0, userServices_1.validatePassword)(email, password);
        if (!validatePw) {
            res.status(400).json({
                success: false,
                message: 'Sai mật khẩu'
            });
        }
        const userData = (0, lodash_1.omit)(userExist === null || userExist === void 0 ? void 0 : userExist.toJSON(), omitField);
        const accessToken = (0, jwt_1.sign)(Object.assign({}, userData));
        res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công',
            accessToken,
            result: userData
        });
    }
    catch (err) {
        console.log(err);
        if (err)
            throw new ValidationErrors_1.default('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
    }
});
exports.loginUser = loginUser;
const logoutUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const userExist = yield (0, userServices_1.findOneUser)({ id: userId });
        if (!userExist) {
            res.status(400).json({
                success: false,
                message: 'Tài khoản không tồn tại'
            });
        }
        const dateCurrent = new Date().toLocaleDateString();
        const updateUser = yield (0, userServices_1.updateUserById)({ lastLogin: dateCurrent }, userId);
        if (updateUser) {
            res.status(200).json({
                success: true,
                message: 'Đăng xuất thành công'
            });
        }
        else {
            res.status(400).json({
                success: false,
                message: 'Đăng xuất thất bại'
            });
        }
    }
    catch (err) {
        console.log(err);
        throw new ValidationErrors_1.default('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
    }
});
exports.logoutUser = logoutUser;
const forgetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const findUser = yield (0, userServices_1.findOneUser)({ email });
        if (!findUser) {
            res.status(400).json({
                success: false,
                message: 'Tài khoản không tồn tại'
            });
        }
        const otp = (0, otp_1.generateOTP)(email);
        const sendOtpMail = yield (0, mailHelper_1.sendOTP)(email, otp, index_1.TITLE_MAIL_FORGETPASSWORD, mailTemplate_1.forgotPasswordMailTemplate);
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
    }
    catch (_a) {
        throw new ValidationErrors_1.default('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
    }
});
exports.forgetPassword = forgetPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email, otp } = req.body;
        const findUser = yield (0, userServices_1.findOneUser)({ email });
        if (!findUser) {
            res.status(400).json({
                success: false,
                message: 'Tài khoản không tồn tại'
            });
        }
        const verify = (0, otp_1.verifyOTP)(email, otp);
        if (!verify) {
            res.status(400).json({
                success: false,
                message: 'Mã OTP sai vui lòng kiểm tra lại mã'
            });
        }
        const updatePassword = yield (0, userServices_1.updateUserById)({ password }, findUser === null || findUser === void 0 ? void 0 : findUser.id);
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
    }
    catch (_b) {
        throw new ValidationErrors_1.default('Có lỗi xảy ra. Vui lòng thử lại.', 'errors');
    }
});
exports.resetPassword = resetPassword;
const verifyOtpRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, otp } = req.body;
        const user = yield (0, userServices_1.findOneUser)({ id: userId });
        const verify = (0, otp_1.verifyOTP)(user === null || user === void 0 ? void 0 : user.email, otp);
        if (!verify) {
            res.status(400).json({
                success: false,
                message: 'Mã OTP sai vui lòng kiểm tra lại mã'
            });
        }
        const updateStatusUser = yield (0, userServices_1.updateUserById)({ status: 1 }, userId);
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
    }
    catch (_c) {
        throw new ValidationErrors_1.default('Có lỗi xảy ra. Vui lòng thử lại', 'errors');
    }
});
exports.verifyOtpRegister = verifyOtpRegister;
//# sourceMappingURL=authControllers.js.map