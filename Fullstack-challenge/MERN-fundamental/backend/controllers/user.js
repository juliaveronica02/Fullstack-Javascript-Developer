const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
require("dotenv").config();
const saltRounds = 12;

module.exports = {
  createUser: (req, res) => {
    UserModel.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.status(401).json({ email: "Email already exists!" });
      } else {
        UserModel.findOne({ username: req.body.username }).then((user) => {
          if (user) {
            return res
              .status(402)
              .json({ username: "Username already exists!" });
          } else {
            const newUser = new UserModel({
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
              passwordConfirm: req.body.passwordConfirm,
            });
            // hash password.
            bcrypt.genSalt(saltRounds, function (err, salt) {
              bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err) throw err;
                newUser.password = hash;
                newUser
                  .save()
                  .then((result) => {
                    if (req.body.password !== req.body.passwordConfirm) {
                      req.json("Password NOT MATCH!");
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
        });
      }
    });
  },
  //   user login.
  login: (req, res) => {
      const {username, password} = req.body
      if (username && password) {
          UserModel.findOne({username : username}).then ((user)=> {
              if ( bcrypt.compare(req.body.password, password)) {
               jwt.sign(
                   {
                       id:response._id,
                   },
                   process.env.PRIVATE_KEY,
                   { expiresIn: 31556926 }, // 1 year of expiration
            (err, token) => {
              res.json({
                status: "success",
                token: token,
              });
            }
               )
              } else {
                return res.status(404).json({
                    status: "failed",
                    error: "Password incorrect",
                  });
              }
          })
      }
  },
};
