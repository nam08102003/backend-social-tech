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
exports.deleteFriend = exports.updateFriend = exports.getListFriend = exports.getOneFriendById = exports.createFriend = void 0;
const UserFriend_1 = require("../models/UserFriend");
const ValidationErrors_1 = __importDefault(require("../errors/ValidationErrors"));
const sequelize_1 = require("sequelize");
const createFriend = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield UserFriend_1.UserFriend.create(payload);
    return data;
});
exports.createFriend = createFriend;
const getOneFriendById = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const where = {
        [sequelize_1.Op.or]: []
    };
    if (!(options === null || options === void 0 ? void 0 : options.userId) || isNaN(options === null || options === void 0 ? void 0 : options.userId))
        throw new ValidationErrors_1.default('Id không hợp lệ', 'errors');
    where[sequelize_1.Op.or].push({ userId: options === null || options === void 0 ? void 0 : options.userId });
    if (options === null || options === void 0 ? void 0 : options.friendId) {
        where[sequelize_1.Op.or].push({ friendId: options.friendId });
    }
    const user = yield UserFriend_1.UserFriend.findOne({
        where
    });
    if (!user) {
        throw new ValidationErrors_1.default('Không tìm thấy tài khoản', 'errors');
    }
    return user;
});
exports.getOneFriendById = getOneFriendById;
const getListFriend = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const where = {
        [sequelize_1.Op.or]: []
    };
    if (!(options === null || options === void 0 ? void 0 : options.userId) || isNaN(options === null || options === void 0 ? void 0 : options.userId))
        throw new ValidationErrors_1.default('Id không hợp lệ', 'errors');
    where[sequelize_1.Op.or].push({ userId: options === null || options === void 0 ? void 0 : options.userId });
    if (options === null || options === void 0 ? void 0 : options.status) {
        where[sequelize_1.Op.or].push({ status: options.status });
    }
    if (options === null || options === void 0 ? void 0 : options.type) {
        where[sequelize_1.Op.or].push({ type: options.type });
    }
    const users = yield UserFriend_1.UserFriend.findAll({ where });
    return users;
});
exports.getListFriend = getListFriend;
const updateFriend = (data, friendId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!friendId || isNaN(friendId) || !userId || isNaN(userId))
        throw new ValidationErrors_1.default('Id không hợp lệ', 'errors');
    if (friendId && userId) {
        return yield UserFriend_1.UserFriend.update(data, {
            where: { friendId, userId }
        });
    }
});
exports.updateFriend = updateFriend;
const deleteFriend = (friendId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!friendId || isNaN(friendId) || !userId || isNaN(userId))
        throw new ValidationErrors_1.default('Id không hợp lệ', 'errors');
    return yield UserFriend_1.UserFriend.destroy({
        where: { friendId, userId }
    });
});
exports.deleteFriend = deleteFriend;
//# sourceMappingURL=friendServices.js.map