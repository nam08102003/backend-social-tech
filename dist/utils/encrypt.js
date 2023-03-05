"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareAsync = exports.compareSync = exports.encryptSync = exports.encryptAsync = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = require("../config/config");
const encryptAsync = (password) => {
    return bcryptjs_1.default.hash(password, config_1.jwtConfig.saltRound);
};
exports.encryptAsync = encryptAsync;
const encryptSync = (password) => {
    return bcryptjs_1.default.hashSync(password, config_1.jwtConfig.saltRound);
};
exports.encryptSync = encryptSync;
const compareSync = (password, hash) => {
    return bcryptjs_1.default.compareSync(password, hash);
};
exports.compareSync = compareSync;
const compareAsync = (password, hash) => {
    return bcryptjs_1.default.compare(password, hash);
};
exports.compareAsync = compareAsync;
//# sourceMappingURL=encrypt.js.map