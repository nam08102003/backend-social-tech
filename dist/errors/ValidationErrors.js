"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("./CustomError"));
class ValidationErrors extends CustomError_1.default {
    constructor(message, property) {
        super(message);
        this.property = property;
        this.errCode = 400;
        this.errType = 'VALIDATION_ERROR';
        this.success = false;
        Object.setPrototypeOf(this, ValidationErrors.prototype);
    }
    serializeErrors() {
        return [{ message: this.message, property: this.property, success: this.success }];
    }
}
exports.default = ValidationErrors;
//# sourceMappingURL=ValidationErrors.js.map