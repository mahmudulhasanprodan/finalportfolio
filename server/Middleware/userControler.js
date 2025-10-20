const People = require("../Schema/userSchema");
const nodemailer = require("nodemailer");

async function userMessage(req,res,next) {
    try {
        const user = await new People(req.body); 
        await user.save();

//Send Email to Admin
 const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_USER, // তোমার Gmail
        pass: process.env.APP_PASS,  // Gmail App Password
      },
    });

const mailOptions = {
      from: user.email,
      to: process.env.ADMIN_USER,
      subject: "New User Form Submission",
      text: `
      Name: ${user.name}
      Email: ${user.email}
      Message: ${user.message}
      `,
    };

    await transporter.sendMail(mailOptions);
        res.status(200).json({
            msg : "Data Successfully Save"
        })
    } catch (err) {
        res.status(500).json({
            error : err.message
        })
    }
};



module.exports = {
    userMessage
}