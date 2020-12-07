const AdminModel = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const saltRounds = 12;
const privateKey = "null";

module.exports = {
  // create user.
  createUser: (req, res) => {
    AdminModel.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user) {
        return res.status(401).json({ email: "Email already exists!" });
      } else {
        AdminModel.findOne({ where: { username: req.body.username } }).then(
          (user) => {
            if (user) {
              return res
                .status(402)
                .json({ username: "Username already exists!" });
            } else {
              const newUser = new AdminModel({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                passwordConfirm: req.body.passwordConfirm,
                phone: req.body.phone,
              });
              // hash password.
              bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(newUser.password, salt, function (err, hash) {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then((result) => {
                      //  password confirm.
                      if (req.body.password !== req.body.passwordConfirm) {
                        res.json("Password undefined");
                      } else {
                        req.body.password == req.body.passwordConfirm;
                        res.json(result);
                      }
                    })
                    .catch((err) => {
                      throw err;
                    });
                });
              });
            }
          }
        );
      }
    });
  },
  // user login.
  login: (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      AdminModel.findOne({ where: { email: email } }).then((user) => {
        if (!user) {
          return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then((isMatch) => {
          console.log(isMatch);
          
          if (isMatch) {
            // User matched Create JWT Payload
            const payload = {
              id: user.id,
              email: user.email,
            };
            // Sign token
            jwt.sign(
              payload,
              privateKey,
              {
                // expiresIn: 31556926, // 1 year in seconds
                expiresIn: 60 * 60,
              },
              (err, token) => {
                res.json({
                  success: true + " " + "Admin Session",
                  token: token,
                  id: user.id,
                  role: user.role,
                  email: user.email,
                  username: user.username
                });
              }
            );
          } else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
      });
    })
  }
  },
  // getAllData.
  getAllData: (req, res) => {
    AdminModel.findAll({
      attributes: ["id", "username", "email", "phone"]
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  // logout.
  logout: (req, res) => {
    res.status(200).send({ message: "Logout successfully!" });
  },
  // admin login version 2.
  // admin can login with phone or email same with user.
  adminLoginAuthentication: (req, res) => {
    let {email, phone, password} = req.body
    let conditions = !email ? {where:{email:email}} : {where: {phone:phone}}
    if(email) {
      conditions = {
        where: {email:email}
      }
    } else if (phone) {
      conditions = {
        where: {phone:phone}
      }
    }
    UserModel.findOne({...conditions }).then((user) => {
      if (!user) {
        return res.status(404).json({ emailOrPhoneNotFound: "Email or Phone not found!" });
      } 
      // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        console.log(isMatch);
        
        if (isMatch) {
          // User matched Create JWT Payload
          const payload = {
            id: user.id,
            email: user.email,
          };
          // Sign token
          jwt.sign(
            payload,
            privateKey,
            {
              // expiresIn: 31556926, // 1 year in seconds
              expiresIn: 60 * 60,
            },
            (err, token) => {
              res.json({
                success: true + " " + "Admin Session",
                token: token,
                id: user.id,
                role: user.role,
                email: user.email,
                username: user.username
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
    });
  })
  }
};