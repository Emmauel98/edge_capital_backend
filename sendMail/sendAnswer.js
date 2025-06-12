const nodemailer = require("nodemailer");
const sendAnswer = require("../utils/sendAnswer");

const sendAnswers = async (data) => {
  const { name, question1, question2, question3, rating } = data;
  const html = sendAnswer(name, question1, question2, question3, rating);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail.com",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        // user: "salaudeenoluwapelumi98@gmail.com",
        // pass: "xqesplvduzdmmrsl",
        user: "anthonyadewuyi01@gmail.com",
        pass: "eulcysakrwjpfvwv",
      },
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `anthonyadewuyi01@gmail.com`,
      to: ["salaudeenoluwapelumi98@gmail.com", "info@edgenext.nl"],
      subject: `👋 Elias Data Services`,
      html: `${html}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        // res.status(500).json({ error, msg: "Please retry" });
        return error;
      } else {
        // res.status(202).json({ info });
        console.log("Email sent: " + info.response);
        return info;
      }
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = sendAnswers;
