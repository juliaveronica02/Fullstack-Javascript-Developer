var express = require('express');
var router = express.Router();
const userController = require("../Controllers/user");
const UserModel = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 12;
const Joi = require("joi");
const PasswordComplexity = require("joi-password-complexity");
const nodemailer = require("nodemailer");

// Init email config
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'julia.veronicagdu@gmail.com',
      pass: 'Developer23'
    }
  });

router.post("/register", userController.createUser)
router.post("/login", userController.login)
router.post("/login2", userController.loginAuthentication)
router.get("/show", userController.getAllData)
router.get("/show/:userId", userController.getDataById)
router.get("/logout", userController.logout);
router.put("/updated/:id", userController.updateDataById);
router.put("/update/:userId", userController.updateDataById2);
router.delete("/delete/:id", userController.deleteById);
router.delete("/delete-user/:id", userController.deleteById2);
router.post("/resetPassword/:id", userController.resetPassword)


// post to generate register by email.
router.post("/register/:email", async (req, res) => {
  let user;
  try {
    user = await UserModel.findOne({
      where: { email: req.params.email }
    });
  } catch (err) {
    return res.status(404).send("Error reading from database");
  }
  if (!user) {
    return res.status(404).send("Email never registered.");
  }
  // Generate one-time use URL with jwt token.
  // const secret = `${user.password}-${user.createdAt}`;
  // const token = jwt.sign({ id: user.id }, secret, {
  //   expiresIn: 300 // expires in 5 minutes.
  // });
  // const url = `http://pabryk.com/${user.id}/${token}`;
  const url = 'https://pabryk.com/login';

  const emailTemplate = {
    subject: "Password Reset Node Auth Application",
    html: `
      <p>Hello ${user.username},</p>
      <p>Thank you for register.</p>
      <p>Click the following link to home page.</p>
      <a href=${url}>${url}</a>`,
    from: process.env.EMAIL_LOGIN,
    to: user.email
  };

  const sendEmail = async () => {
    try {
      const info = await transporter.sendMail(emailTemplate);
      console.log("Email sent", info.response);
      return res.status(200).send("Email sent");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Error sending email");
    }
  };

  sendEmail();
});

// post to generate reset password url
router.post("/reset_password/:email", async (req, res) => {
    let user;
    try {
      user = await UserModel.findOne({
        where: { email: req.params.email }
      });
    } catch (err) {
      return res.status(404).send("Error reading from database");
    }
    if (!user) {
      return res.status(404).send("Email never registered.");
    }
    // Generate one-time use URL with jwt token.
    const secret = `${user.password}-${user.createdAt}`;
    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn: 300 // expires in 5 minutes.
    });
    const url = `http://localhost:8080/users/reset_password_received/${user.id}/${token}`;
  
    const emailTemplate = {
      subject: "Password Reset Node Auth Application",
      html: `
        <p>Hello ${user.username},</p>
        <p>You recently requested to reset your password.</p>
        <p>Click the following link to finish resetting your password.</p>
        <a href=${url}>${url}</a>`,
      from: process.env.EMAIL_LOGIN,
      to: user.email
    };
  
    const sendEmail = async () => {
      try {
        const info = await transporter.sendMail(emailTemplate);
        console.log("Email sent", info.response);
        return res.status(200).send("Email sent");
      } catch (err) {
        console.log(err);
        return res.status(500).send("Error sending email");
      }
    };
  
    sendEmail();
  });
  // post to verify reset password url
  router.post("/receive_new_password/:id/:token", async (req, res) => {
    // First parse request object
    // Get id and token within params, and new password in body
    const { id, token } = req.params;
    const { password } = req.body;
    // Validate new password
    try {
      await Joi.validate(
        { password },
        {
          password: new PasswordComplexity().required()
        }
      );
    } catch (err) {
      return res.status(400).send(err.details[0].message);
    }
    // get user from database with id
    let user;
    try {
      user = await db.User.findOne({
        where: { id }
      });
    } catch (err) {
      return res.status(404).send("Error reading database");
    }
    if (!user) return res.status(404).send("No user with that id");
    // Generate secret token
    const secret = `${user.password}-${user.createdAt}`;
    // Verify that token is valid
    const payload = jwt.decode(token, secret);
    if (!payload) {
      return res.status(404).send("Invalid id or token");
    }
    if (payload.id != id) {
      return res.status(404).send("Invalid id or token");
    }
    // Hash new password and store in database
    const salt = await bcrypt.genSalt(saltRounds);
    user.password = await bcrypt.hash(password, salt);
    user = await user.save();
    return res.status(200).send("Password Reset Success!");
  });

module.exports = router;