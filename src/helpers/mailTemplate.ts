export const forgotPasswordMailTemplate = function (details: { otp: string }) {
  const content = `Chào bạn! <br/>
  Chúng tôi nhận được yêu cầu thay đổi mật khẩu tài khoản của bạn. Vui lòng nhập mã OTP <b>${details?.otp}</b> để xác nhận thông tin`;
  return mailTemplate(content, 'Forgot Password');
};

export const resetPasswordTemplate = function () {
  const content = 'Bạn đã thay đổi mật khẩu thành công';
  return mailTemplate(content, 'Password Reset Confirmation!');
};

export const registerUserTemplate = (details: { otp: string }) => {
  const content = `Chào bạn! Chúng tôi nhận được yêu cầu đăng ký tài khoản Facebook từ mail của bạn. Nếu đúng là bạn, vui lòng nhập mã OTP sau đây để hoàn tất quá trình đăng ký tài khoản.
    <br/>Mã OTP của bạn là: <b>${details?.otp}</b>`;
  return mailTemplate(content, 'Register Success!');
};

export const mailTemplate = function (content: string, title: string) {
  return `<html>
              <head>
                  <title>${title}</title>
              </head>
              <body>${content}</body>
          </html>`;
};
