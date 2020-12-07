const UserModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const saltRounds = 12;

module.exports = {
  createUser: (req, res) => {
    UserModel.findOne({ where: {Email: req.body.Email} }).then((user) => {
      if (user) {
        return res.status(401).json({ Email: "Email already exists!" });
      } else {
        UserModel.findOne({ where: {Fullname: req.body.Fullname} }).then((user) => {
          if (user) {
            return res
              .status(402)
              .json({ Fullname: "Fullname already exists!" });
          } else {
            const newUser = new UserModel({
              Fullname: req.body.Fullname,
              Email: req.body.Email,
              Password: req.body.Password,
              Phone: req.body.Phone,
              Role: req.body.Role,
              Kota: req.body.Kota,
            });
            // hash password.
            bcrypt.genSalt(saltRounds, function (err, salt) {
              bcrypt.hash(newUser.Password, salt, function (err, hash) {
                if (err) throw err;
                newUser.Password = hash;
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
      const {Fullname, Password} = req.body
      if (Fullname && Password) {
          UserModel.findOne({where: {Fullname : Fullname}}).then ((user)=> {
              if ( bcrypt.compare(req.body.Password, Password)) {
               jwt.sign(
                   {
                       id:response.id,
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
      UserModel.findAll({})
      .then((result)=> res.json(result))
      .catch((err)=> res.json(err))
  } 
};