const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
  auth:{
    api_key: 'API_KEY',
    domain: 'DOMAIN_ADDRESS'
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'digitalhubofficial2020@gmail.com',
    subject,
    text
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    }
    else {
      cb(null, data);
    }
  });

}

module.exports = sendMail;
