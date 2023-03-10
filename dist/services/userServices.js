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
exports.deleteUserById = exports.updateUserById = exports.findOneUser = exports.validatePassword = exports.userExists = exports.getUserById = exports.createUser = void 0;
const encrypt_1 = require("../utils/encrypt");
const connection_1 = require("../models/connection");
const sequelize_1 = require("sequelize");
const lodash_1 = require("lodash");
const ValidationErrors_1 = __importDefault(require("../errors/ValidationErrors"));
const encrypt_2 = require("../utils/encrypt");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const gender = payload === null || payload === void 0 ? void 0 : payload.gender;
    let timeParse;
    if (payload === null || payload === void 0 ? void 0 : payload.birthday) {
        const timeFormat = (0, moment_timezone_1.default)(payload.birthday).tz('Asia/Jakarta').format();
        timeParse = new Date(Date.parse(timeFormat));
    }
    if (gender.toUpperCase() === 'NỮ') {
        payload.gender = 'Female';
    }
    else if (gender.toUpperCase() === 'NAM') {
        payload.gender = 'Male';
    }
    payload.birthday = timeParse;
    payload.fullName = (payload === null || payload === void 0 ? void 0 : payload.firstName) + ' ' + (payload === null || payload === void 0 ? void 0 : payload.lastName);
    payload.password = (0, encrypt_1.encryptSync)(payload.password);
    const user = yield connection_1.User.create(payload);
    return user;
});
exports.createUser = createUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield connection_1.User.findByPk(id, {
        attributes: { exclude: ['password'] }
    });
    if (!user) {
        throw new ValidationErrors_1.default('Không tìm thấy tài khoản', 'errors');
    }
    return user;
});
exports.getUserById = getUserById;
const userExists = (options = {
    email: null,
    mobile: null
}) => __awaiter(void 0, void 0, void 0, function* () {
    if (!options.email) {
        throw new ValidationErrors_1.default('Vui lòng nhập email', 'User');
    }
    const where = {
        [sequelize_1.Op.or]: []
    };
    if (options.email) {
        where[sequelize_1.Op.or].push({ email: options.email });
    }
    if (options.mobile) {
        where[sequelize_1.Op.or].push({ email: options.mobile });
    }
    const users = yield connection_1.User.findAll({ where: where });
    return users.length > 0;
});
exports.userExists = userExists;
const validatePassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email && !password) {
        throw new ValidationErrors_1.default('Vui lòng nhập emai và password', 'errors');
    }
    const where = {
        [sequelize_1.Op.or]: []
    };
    if (email) {
        where[sequelize_1.Op.or].push({ email: email });
    }
    const user = yield connection_1.User.findOne({ where });
    return (0, encrypt_2.compareSync)(password, user.password);
});
exports.validatePassword = validatePassword;
const findOneUser = (options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!options.email && !options.id) {
        throw new ValidationErrors_1.default('Please provide email or id ', 'User');
    }
    const where = {
        [sequelize_1.Op.or]: []
    };
    if (options.email) {
        where[sequelize_1.Op.or].push({ email: options.email });
    }
    if (options.id) {
        where[sequelize_1.Op.or].push({ id: options.id });
    }
    const user = yield connection_1.User.findOne({
        where,
        attributes: { exclude: ['password'] }
    });
    return user;
});
exports.findOneUser = findOneUser;
const updateUserById = (data, userId) => {
    if (!data && !userId) {
        throw new ValidationErrors_1.default('Vui lòng nhập dữ liệu cần thay đổi và idUser', 'errors');
    }
    if (userId && (0, lodash_1.isString)(userId)) {
        throw new ValidationErrors_1.default('idUser không hợp lệ', 'errors');
    }
    if (data.id || userId) {
        const id = data.id || userId;
        if (data.password) {
            data.password = (0, encrypt_1.encryptSync)(data.password);
        }
        return connection_1.User.update(data, {
            where: { id: id }
        });
    }
};
exports.updateUserById = updateUserById;
const deleteUserById = (userId) => {
    if (!userId) {
        throw new ValidationErrors_1.default('Please user id to delete', 'User');
    }
    if (userId && (0, lodash_1.isString)(userId)) {
        throw new ValidationErrors_1.default('Invalid user id', 'User');
    }
    return connection_1.User.destroy({
        where: { id: userId }
    });
};
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=userServices.js.map