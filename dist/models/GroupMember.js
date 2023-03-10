"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupMember = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let GroupMember = class GroupMember extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }),
    __metadata("design:type", Number)
], GroupMember.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], GroupMember.prototype, "groupId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], GroupMember.prototype, "UserId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }) //0: Admin, 1: Thành viên, 2: Phó nhóm, 3: Người duyệt
    ,
    __metadata("design:type", Number)
], GroupMember.prototype, "roleId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }) //0: Mới, 1: Bị từ chối, 2: Đang hoạt động, 3: Đang chờ duyệt, 4: Bị chặn,
    ,
    __metadata("design:type", Number)
], GroupMember.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT }),
    __metadata("design:type", String)
], GroupMember.prototype, "notes", void 0);
GroupMember = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'group_members',
        timestamps: true
    })
], GroupMember);
exports.GroupMember = GroupMember;
//# sourceMappingURL=GroupMember.js.map