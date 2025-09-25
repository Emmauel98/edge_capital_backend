// utils/sendQueryMail.js
const nodemailer = require("nodemailer");
const Resend = require('resend').Resend;


const resend = new Resend('re_3C2m2aDo_ND1vk2L8bUzYcqmgLvDLYC2T');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'salaudeenoluwapelumi98@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });

const sendQueryMail = async (data) => {
  const { firstName, lastName, mail, number, message } = data;
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 2rem; background: #f4f4f4">
      <h2 style="color: #2c3e50;">📨 A New message from ${mail}</h2>
      <p><strong>Firstname:</strong> ${firstName}</p>
      <p><strong>Lastname:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${mail}</p>
      <p><strong>Mobile Number:</strong> ${number}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  `;

  try {
  // const { Resend } = require('resend');
  // const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'salaudeenoluwapelumi98@gmail.com',
  subject: `📥 New Form Submission from ${firstName}`,
  html
});

} catch (error) {
  console.error("Error sending query email:", error.message);
  throw new Error("Email failed to send.");
}
  // try {
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     host: "smtp.gmail.com",
  //     port: 587,
  //     // port: 465,
  //     secure: false,
  //     auth: {
  //      user: process.env.EMAIL_USER, 
  //       pass: process.env.EMAIL_PASS,
  //     },
  //     tls: {
  //       rejectUnauthorized: false,
  //     },
  //   });

  //   const mailOptions = {
  //     from: `tonyemerald5@gmail.com`,
  //     to: [
  //       "info@edgenext.nl",
  //       "anthonyadewuyi01@gmail.com",
  //       "tonyemerald5@gmail.com",
  //     ],
  //     subject: `📥 New Form Submission from ${firstName}`,
  //     html,
  //   };

  //   await transporter.sendMail(mailOptions);
  // } catch (error) {
  //   console.error("Error sending query email:", error.message);
  //   throw new Error("Email failed to send.");
  // }
};

module.exports = sendQueryMail;
