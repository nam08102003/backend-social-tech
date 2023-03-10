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
exports.deleteFriend = exports.updateFriend = exports.getListFriend = exports.getOneFriend = exports.addFriend = void 0;
const userServices_1 = require("../services/userServices");
const friendServices_1 = require("../services/friendServices");
const ValidationErrors_1 = __importDefault(require("../errors/ValidationErrors"));
const addFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const userId = data === null || data === void 0 ? void 0 : data.userId;
        const friendId = data === null || data === void 0 ? void 0 : data.friendId;
        const user = (0, userServices_1.getUserById)(userId);
        const friend = (0, userServices_1.getUserById)(friendId);
        if (!user || !friend) {
            res.status(403).json({
                status: 403,
                success: false,
                message: 'Tài khoản không tồn tại'
            });
        }
        const result = yield (0, friendServices_1.createFriend)(data);
        res.status(201).json({
            status: 201,
            success: true,
            message: 'Thêm bạn thành công',
            result
        });
    }
    catch (_a) {
        throw new ValidationErrors_1.default('Có lỗi xảy ra. Vui lòng thử lại', 'errors');
    }
});
exports.addFriend = addFriend;
const getOneFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getOneFriend = getOneFriend;
const getListFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getListFriend = getListFriend;
const updateFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateFriend = updateFriend;
const deleteFriend = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteFriend = deleteFriend;
//# sourceMappingURL=friendController.js.map