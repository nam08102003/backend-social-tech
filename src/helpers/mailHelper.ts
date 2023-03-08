import nodemailer from 'nodemailer';
import { emailConfig } from '../config/config';
import { mailTemplate } from './mailTemplate';

const sender = nodemailer.createTransport({
  // host: '"smtp.mail.com"',
  // port: 465,
  // service: 'gmail',
  // secure: true,
  // auth: {
  //   // type: 'OAuth2',
  //   user: emailConfig.emailUser,
  //   pass: emailConfig.emailPassword,
  //   clientId: emailConfig.clientId,
  //   clientSecret: emailConfig.clientSecret,
  //   accessToken: emailConfig.accessToken,
  //   refreshToken: emailConfig.refreshToken
  // }
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '74c3e7f86254a0',
    pass: 'ec23f71bece647'
  }
});

export const sendOTP = async (
  email: string,
  otp?: string,
  titleMail?: string,
  template?: Function
) => {
  return await sendMail({
    to: email,
    html: template({ otp }),
    subject: titleMail
  });
};
export const sendMail = (exports.sendMail = async function (details: {
  to: string;
  subject: string;
  html: string;
  attachments?: any[];
  cc?: any;
  bcc?: any;
  from?: string;
}) {
  const mailOptions = {
    to: details.to,
    subject: details.subject,
    html: details.html,
    attachments: details.attachments || [],
    cc: details.cc || null,
    bcc: details.bcc || null,
    from: details.from || emailConfig.emailFrom
  };

  return await new Promise(function (resolve, reject) {
    sender.sendMail(mailOptions, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
});

exports.sendMessage = async (email: string, messageBody: any, attachment: any[] = []) => {
  return await sendMail({
    to: email,
    attachments: attachment,
    subject: messageBody.subject,
    html: mailTemplate(messageBody.subject, messageBody.body)
  });
};
