"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    gender: joi_1.default.string().required(),
    birthday: joi_1.default.string().required(),
    password: joi_1.default.string().min(6).required()
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required()
});
exports.updateSchema = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    fullName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
    confirm_password: joi_1.default.string().min(6),
    intro: joi_1.default.string()
});
//# sourceMappingURL=userValidation.js.map