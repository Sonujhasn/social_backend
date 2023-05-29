const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) =>{

    const transpoter = nodeMailer.createTransport({
        //host :process.env.SMPT_HOST,
        // port : process.env.SMPT_PORT,
        //auth :{
        //    user : process.env.SMPT_MAIL,
        //    pass : process.env.SMPT_PASSWORD
       // },
       // service : process.env.SMPT_SERVICE

       host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "198fdab4399005",
            pass: "7a88eb38949777"
        }
       
    })

    const mailOptions = {
        from : process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transpoter.sendMail(mailOptions)
}