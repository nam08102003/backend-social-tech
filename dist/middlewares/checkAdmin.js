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
const ValidationErrors_1 = __importDefault(require("../errors/ValidationErrors"));
const jwt_1 = require("../utils/jwt");
const checkAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.headers;
        if (!token) {
            res.status(400).json({
                success: false,
                message: 'Không có thông tin token'
            });
        }
        const dataDecoded = (0, jwt_1.verify)(String(token));
        if (!dataDecoded) {
            res.status(400).json({
                success: false,
                message: 'Không có thông tin token'
            });
        }
        const { roleId } = dataDecoded === null || dataDecoded === void 0 ? void 0 : dataDecoded.decoded;
        if (Number(roleId) === 0) {
            console.log('Next');
            next();
        }
        else {
            res.status(400).json({
                success: false,
                message: 'Tài khoản không có quyền thực hiện chức năng này'
            });
        }
    }
    catch (err) {
        console.log(err);
        throw new ValidationErrors_1.default('Có lỗi. Vui lòng thử lại', 'errors');
    }
});
exports.default = checkAdmin;
//# sourceMappingURL=checkAdmin.js.map