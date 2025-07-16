const nodemailer = require('nodemailer');
const catchAsync = require('./catchAsync');

const sendEmail = catchAsync(async ({ to, subject, text }) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    // service: 'gmail', // You can change this to another service

    host: process.env.EMAIL_HOST, // only because im using mailtrap
    port: process.env.EMAIL_PORT, //  only because im using mailtrap
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your password or app password
    },
    // Avtivate in gamil "less secure app" option if using gmail as a service
  });

  // Email options
  const mailOptions = {
    from: `"Younes Ebrahimzade" <natours@gmail.com>`,
    to,
    subject,
    text,
    // html,
  };

  // Send email
  await transporter.sendMail(mailOptions); // add const info at frist of this line if you want the next line work !
  // console.log('Email sent:', info.messageId); // use here if you want to log some info in console
  // return info;
});

module.exports = sendEmail;
