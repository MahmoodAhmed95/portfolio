var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("contact", { title: "Mahmood Ahmed" });
});
// Handle form submission
router.post("/sendEmail", (req, res) => {
  const { name, mobile, email, subject, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "mm3eaa@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Allows Nodemailer to work with Gmail
    },
  });

  // Email data
  const mailOptions = {
    from: email,
    to: "mahmood1995ahmed@gmail.com",
    subject: subject,
    text:
      "Name: " +
      "\n" +
      req.body.name +
      "\n" +
      "Mobile: " +
      "\n" +
      req.body.mobile +
      "\n" +
      "Email: " +
      "\n" +
      email +
      "\n" +
      "Message: " +
      "\n" +
      message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send("Error sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.redirect("/contact");
    }
  });
});
module.exports = router;
