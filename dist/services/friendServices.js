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
exports.deleteFriend = exports.updateFriend = exports.getListFriend = exports.getOneFriendById = exports.createFriend = void 0;
const UserFriend_1 = require("../models/UserFriend");
const createFriend = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield UserFriend_1.UserFriend.create(payload);
    return data;
});
exports.createFriend = createFriend;
const getOneFriendById = (id) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getOneFriendById = getOneFriendById;
const getListFriend = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.getListFriend = getListFriend;
const updateFriend = (id) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateFriend = updateFriend;
const deleteFriend = (id) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteFriend = deleteFriend;
//# sourceMappingURL=friendServices.js.map