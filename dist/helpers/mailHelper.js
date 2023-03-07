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
exports.sendMail = exports.sendOTP = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../config/config");
const mailTemplate_1 = require("./mailTemplate");
const sender = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: config_1.emailConfig.emailService,
    auth: {
        type: 'OAUTH2',
        user: config_1.emailConfig.emailUser,
        pass: config_1.emailConfig.emailPassword
    }
});
const sendOTP = (email, otp, titleMail, template) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, exports.sendMail)({
        to: email,
        html: template({ otp }),
        subject: titleMail
    });
});
exports.sendOTP = sendOTP;
exports.sendMail = (exports.sendMail = function (details) {
    return __awaiter(this, void 0, void 0, function* () {
        const mailOptions = {
            to: details.to,
            subject: details.subject,
            html: details.html,
            attachments: details.attachments || [],
            cc: details.cc || null,
            bcc: details.bcc || null,
            from: details.from || config_1.emailConfig.emailFrom
        };
        return yield new Promise(function (resolve, reject) {
            sender.sendMail(mailOptions, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
    });
});
exports.sendMessage = (email, messageBody, attachment = []) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, exports.sendMail)({
        to: email,
        attachments: attachment,
        subject: messageBody.subject,
        html: (0, mailTemplate_1.mailTemplate)(messageBody.subject, messageBody.body)
    });
});
//# sourceMappingURL=mailHelper.js.map