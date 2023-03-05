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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.findOneUser = exports.userExists = exports.getUserById = exports.createUser = void 0;
const encrypt_1 = require("../utils/encrypt");
const connection_1 = require("../models/connection");
const sequelize_1 = require("sequelize");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
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
        throw new Error('User not found');
    }
    return user;
});
exports.getUserById = getUserById;
const userExists = (options = {
    email: null,
    mobile: null
}) => __awaiter(void 0, void 0, void 0, function* () {
    if (!options.email) {
        throw new Error('Please provide either of these options: email');
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
// export const validatePassword = async (email: string, password: string) => {
//   if (!email && !password) {
//     throw new Error('Please provide email and password');
//   }
//   const where = {
//     [Op.or]: [] as any
//   };
//   if (email) {
//     where[Op.or].push({ email: email });
//   }
//   const user = await User.findOne({ where });
//   return User.password(password, user.password);
// };
const findOneUser = (options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!options.email && !options.id) {
        throw new Error('Please provide email or id ');
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
const updateUserById = (user, userId) => {
    if (!user && !userId) {
        throw new Error('Please provide user data and/or user id to update');
    }
    if (userId && isNaN(userId)) {
        throw new Error('Invalid user id');
    }
    if (user.id || userId) {
        const id = user.id || userId;
        if (user.password) {
            user.password = (0, encrypt_1.encryptSync)(user.password);
        }
        return connection_1.User.update(user, {
            where: { id: id }
        });
    }
};
exports.updateUserById = updateUserById;
const deleteUserById = (userId) => {
    if (!userId) {
        throw new Error('Please user id to delete');
    }
    if (userId && isNaN(userId)) {
        throw new Error('Invalid user id');
    }
    return connection_1.User.destroy({
        where: { id: userId }
    });
};
exports.deleteUserById = deleteUserById;
//# sourceMappingURL=userServices.js.map