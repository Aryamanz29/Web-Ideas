const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
  auth:{
    api_key: '2af056481b70b2836c0b561d6b9245d7-87c34c41-5634fa5f',
    domain: 'sandboxb4be0d54ae4f4f17a1470404085b08a5.mailgun.org'
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
