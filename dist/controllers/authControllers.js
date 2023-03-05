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
exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const userServices_1 = require("../services/userServices");
const ValidationErrors_1 = __importDefault(require("../errors/ValidationErrors"));
const jwt_1 = require("../utils/jwt");
const lodash_1 = require("lodash");
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
//# sourceMappingURL=authControllers.js.map