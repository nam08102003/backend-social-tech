"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailTemplate = exports.registerUserTemplate = exports.resetPasswordTemplate = exports.forgotPasswordMailTemplate = void 0;
const forgotPasswordMailTemplate = function (details) {
    const content = `Chào bạn! <br/>
  Chúng tôi nhận được yêu cầu thay đổi mật khẩu tài khoản của bạn. Vui lòng nhập mã OTP <b>${details === null || details === void 0 ? void 0 : details.otp}</b> để xác nhận thông tin`;
    return (0, exports.mailTemplate)(content, 'Forgot Password');
};
exports.forgotPasswordMailTemplate = forgotPasswordMailTemplate;
const resetPasswordTemplate = function () {
    const content = 'Bạn đã thay đổi mật khẩu thành công';
    return (0, exports.mailTemplate)(content, 'Password Reset Confirmation!');
};
exports.resetPasswordTemplate = resetPasswordTemplate;
const registerUserTemplate = (details) => {
    const content = `Chào bạn! Chúng tôi nhận được yêu cầu đăng ký tài khoản Facebook từ mail của bạn. Nếu đúng là bạn, vui lòng nhập mã OTP sau đây để hoàn tất quá trình đăng ký tài khoản.
    <br/>Mã OTP của bạn là: <b>${details === null || details === void 0 ? void 0 : details.otp}</b>`;
    return (0, exports.mailTemplate)(content, 'Register Success!');
};
exports.registerUserTemplate = registerUserTemplate;
const mailTemplate = function (content, title) {
    return `<html>
              <head>
                  <title>${title}</title>
              </head>
              <body>${content}</body>
          </html>`;
};
exports.mailTemplate = mailTemplate;
//# sourceMappingURL=mailTemplate.js.map