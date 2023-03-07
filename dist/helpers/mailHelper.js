"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.sendOTP = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../config/config");
const mailTemplate_1 = require("./mailTemplate");
const sender = nodemailer_1.default.createTransport({
    service: config_1.emailConfig.emailService,
    auth: {
        user: config_1.emailConfig.emailUser,
        pass: config_1.emailConfig.emailPassword
    },
    secure: true
});
const sendOTP = (email, otp, titleMail, template) => {
    return (0, exports.sendMail)({
        to: email,
        html: template({ otp }),
        subject: titleMail
    });
};
exports.sendOTP = sendOTP;
exports.sendMail = (exports.sendMail = function (details) {
    const mailOptions = {
        to: details.to,
        subject: details.subject,
        html: details.html,
        attachments: details.attachments || [],
        cc: details.cc || null,
        bcc: details.bcc || null,
        from: details.from || config_1.emailConfig.emailFrom
    };
    return new Promise(function (resolve, reject) {
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
exports.sendMessage = (email, messageBody, attachment = []) => {
    return (0, exports.sendMail)({
        to: email,
        attachments: attachment,
        subject: messageBody.subject,
        html: (0, mailTemplate_1.mailTemplate)(messageBody.subject, messageBody.body)
    });
};
//# sourceMappingURL=mailHelper.js.map