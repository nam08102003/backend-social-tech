"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const userValidation_1 = require("../validation/userValidation");
const validateReq_1 = __importDefault(require("../middlewares/validateReq"));
const router = (0, express_1.Router)();
router.post('/me', authControllers_1.getInfoUserByToken);
router.post('/login', (0, validateReq_1.default)(userValidation_1.loginSchema), authControllers_1.loginUser);
router.post('/register', (0, validateReq_1.default)(userValidation_1.registerSchema), authControllers_1.registerUser);
router.post('/verify-otp-register', authControllers_1.verifyOtpRegister);
router.post('/forget-password', authControllers_1.forgetPassword);
router.post('/reset-password', authControllers_1.resetPassword);
router.post('/logout', authControllers_1.logoutUser);
exports.default = router;
//# sourceMappingURL=auth.js.map