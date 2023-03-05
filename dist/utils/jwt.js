"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = void 0;
const config_1 = require("../config/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sign = (payload, options = { expiresIn: config_1.jwtConfig.expiry + 'h' }) => {
    return jsonwebtoken_1.default.sign(payload, config_1.jwtConfig.secret, options);
};
exports.sign = sign;
const verify = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.jwtConfig.secret);
        return { valid: true, expired: false, decoded };
    }
    catch (error) {
        console.log('token', token, { error });
        let msg;
        if (error instanceof Error) {
            msg = error.message;
        }
        else {
            msg = error;
        }
        return {
            valid: false,
            expired: msg === 'jwt expired',
            msg: msg,
            decoded: null
        };
    }
};
exports.verify = verify;
//# sourceMappingURL=jwt.js.map