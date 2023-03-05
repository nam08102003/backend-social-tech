"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError_1.default) {
        return res.status(err.errCode).send({ errors: err.serializeErrors() });
    }
    res.status(422).json({ errors: [{ message: "Something broke! We're on it." }] });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map