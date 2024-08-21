const nodemailer = require('nodemailer');
const { crd } = require('../config/cred');

exports.SendGreetMail = async (i) => {
  try {
    console.log(crd);

    const mail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: crd.user,
        pass: crd.pass,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: 'aryan1383.be22@chitkara.edu.in',
      to: i.email,
      subject: 'THANK YOU FOR REGISTERING',
      html: `Hello, I am Aryan. Your mobile number is ${i.mobile_number}.`,
    };

    let info = await mail.sendMail(mailOptions);
    console.log(`Invoice Mail sent to ${i.email}`, info.messageId);
    return true;
  } catch (err) {
    console.error(`Failed to send email: ${err}`);
    throw err;
  }
};
