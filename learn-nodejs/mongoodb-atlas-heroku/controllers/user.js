const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const saltRounds = 12;

module.exports = {
  createUser: (req, res) => {
    UserModel.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        return res.status(401).json({ email: "Email already exists!" });
      } else {
        UserModel.findOne({ fullname: req.body.fullname }).then((user) => {
          if (user) {
            return res
              .status(402)
              .json({ fullname: "Fullname already exists!" });
          } else {
            const newUser = new UserModel({
              fullname: req.body.fullname,
              email: req.body.email,
              password: req.body.password,
              phone: req.body.phone,
              daftar: req.body.daftar,
              kota: req.body.kota,
            });
            // hash password.
            bcrypt.genSalt(saltRounds, function (err, salt) {
              bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err) throw err;
                newUser.password = hash;
                newUser
                  .save()
                  .then((result) => res.json(result))
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
      const {fullname, password} = req.body
      if (fullname && password) {
          UserModel.findOne({fullname : fullname}).then ((user)=> {
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
  getAllData: (req,res) => {
      UserModel.find({})
      .then((result)=> res.json(result))
      .catch((err)=> res.json(err))
  } 
};