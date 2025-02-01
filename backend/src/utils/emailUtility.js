import nodemailer from "nodemailer"
import ApiError from "./apiError.js"


// using SMTP
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
})

const sendEmail = async ({to,subject,text,html}) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            html
        }

        const response = await transporter.sendMail(mailOptions)
        return response
    } catch (error) {
        throw new ApiError(500,"email sending error",error.message)
    }
        
}

export default sendEmail