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
exports.ProfileUser = exports.ProfileGroup = exports.GroupPost = exports.GroupMessage = exports.GroupMember = exports.GroupFollower = exports.Group = exports.UserMessage = exports.UserFriend = exports.UserFollower = exports.UserPost = exports.User = exports.initDB = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../config/config");
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const UserPost_1 = require("./UserPost");
Object.defineProperty(exports, "UserPost", { enumerable: true, get: function () { return UserPost_1.UserPost; } });
const UserFriend_1 = require("./UserFriend");
Object.defineProperty(exports, "UserFriend", { enumerable: true, get: function () { return UserFriend_1.UserFriend; } });
const UserMessage_1 = require("./UserMessage");
Object.defineProperty(exports, "UserMessage", { enumerable: true, get: function () { return UserMessage_1.UserMessage; } });
const UserFollower_1 = require("./UserFollower");
Object.defineProperty(exports, "UserFollower", { enumerable: true, get: function () { return UserFollower_1.UserFollower; } });
const Group_1 = require("./Group");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return Group_1.Group; } });
const GroupFollower_1 = require("./GroupFollower");
Object.defineProperty(exports, "GroupFollower", { enumerable: true, get: function () { return GroupFollower_1.GroupFollower; } });
const GroupMember_1 = require("./GroupMember");
Object.defineProperty(exports, "GroupMember", { enumerable: true, get: function () { return GroupMember_1.GroupMember; } });
const GroupMessage_1 = require("./GroupMessage");
Object.defineProperty(exports, "GroupMessage", { enumerable: true, get: function () { return GroupMessage_1.GroupMessage; } });
const GroupPost_1 = require("./GroupPost");
Object.defineProperty(exports, "GroupPost", { enumerable: true, get: function () { return GroupPost_1.GroupPost; } });
const ProfileGroup_1 = require("./ProfileGroup");
Object.defineProperty(exports, "ProfileGroup", { enumerable: true, get: function () { return ProfileGroup_1.ProfileGroup; } });
const ProfileUser_1 = require("./ProfileUser");
Object.defineProperty(exports, "ProfileUser", { enumerable: true, get: function () { return ProfileUser_1.ProfileUser; } });
const sequelize = new sequelize_typescript_1.Sequelize({
    host: config_1.dbConfig === null || config_1.dbConfig === void 0 ? void 0 : config_1.dbConfig.host,
    username: config_1.dbConfig === null || config_1.dbConfig === void 0 ? void 0 : config_1.dbConfig.username,
    password: config_1.dbConfig === null || config_1.dbConfig === void 0 ? void 0 : config_1.dbConfig.password,
    database: config_1.dbConfig === null || config_1.dbConfig === void 0 ? void 0 : config_1.dbConfig.database,
    dialect: 'mysql',
    dialectModule: mysql2_1.default,
    logging: false,
    dialectOptions: {
        ssl: {
            required: false
        }
    },
    define: {
        timestamps: false
    },
    timezone: '+07:00'
});
sequelize.addModels([
    User_1.User,
    UserPost_1.UserPost,
    UserFollower_1.UserFollower,
    UserFriend_1.UserFriend,
    UserMessage_1.UserMessage,
    Group_1.Group,
    GroupFollower_1.GroupFollower,
    GroupMember_1.GroupMember,
    GroupMessage_1.GroupMessage,
    GroupPost_1.GroupPost,
    ProfileGroup_1.ProfileGroup,
    ProfileUser_1.ProfileUser
]);
const initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.authenticate();
    yield sequelize.sync({ alter: true });
});
exports.initDB = initDB;
//# sourceMappingURL=connection.js.map