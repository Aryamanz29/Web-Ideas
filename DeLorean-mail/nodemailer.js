import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: process.env.USER_SERVICE,
    auth: {
        user: process.env.USER_ID,
        pass: process.env.USER_PASS
    }
});


export const send_mail = (user, sub, body, date) => {

    const options = {
        from: process.env.USER_ID,
        to: user,
        subject: sub,
        text: body + "\n\n\n From Date(dd-mm-yyyy): " + date
    };

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("sent: " + info.response);
    })
}