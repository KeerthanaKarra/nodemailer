const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.forwardemail.net",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});

const mailOptions = {
    from: {
        name: 'keerthi',
        address: process.env.USER
    },// sender address
    to: ["keerthanapatel049@gmail.com"], // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Good morining", // plain text body
    html: "<b>Hope you r doing good</b>", // html body
    attachments: [
        {
            filename: './pdf.pdf',
            path: path.join(__dirname, './pdf.pdf'),
        },
        {
            filename: './nature.jpg',
            path: path.join(__dirname, './nature.jpg'),
        }
    ]
}
const sendMail = async (transporter,
    mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
        console.log("email has been sent successfully!");
    }
    catch (error) {
        console.error(error)
    }
}
sendMail(transporter,mailOptions);