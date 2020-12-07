const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const saltRounds = 12;
const privateKey = "null";

module.exports = {
    createUser: (req, res) => {
        UserModel.findOne({ where: { Email: req.body.Email } }).then((user) => {
          if (user) {
            return res.status(401).json({ Email: "Email already exists!" });
          } else {
            UserModel.findOne({ where: { Fullname: req.body.Fullname } }).then(
              (user) => {
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
                    passwordConfirm: req.body.passwordConfirm,
                  });
                  // hash password.
                  bcrypt.genSalt(saltRounds, function (err, salt) {
                    bcrypt.hash(newUser.Password, salt, function (err, hash) {
                      if (err) throw err;
                      newUser.Password = hash;
                      newUser
                        .save()
                        .then((result) => {
                          //  password confirm.
                          if (req.body.Password !== req.body.passwordConfirm) {
                            res.json("Password undefined");
                          } else {
                            req.body.Password == req.body.passwordConfirm;
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
    //  login.
      login: (req, res, next) => {
        const { Fullname, Password } = req.body;
        // Find user by email
        UserModel.findOne({ where: {Fullname: Fullname} }).then((user) => {
          // Check if user exists
        //   console.log("user", user);
          
          if (!user) {
            return res.status(404).json({ fullnamenotfound: "Fullname not found" });
          }
          // Check password
          bcrypt.compare(Password, user.Password).then((isMatch) => {
            // console.log("isMatch",isMatch);
            
            if (isMatch) {
              // User matched Create JWT Payload
              const payload = {
                id: user.id,
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
                    success: true,
                    token: token,
                    id: user.id,
                  });
                }
              );
            } else {
              return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
          });
        });
      },
    //  getAllData.
      getAllData: (req, res) => {
        UserModel.findAll({})
          .then((result) => res.json(result))
          .catch((err) => res.json(err));
      },
    // logout.
    logout: (req, res) => {
        res.status(200).send({ message: "Logout successfully!" });
      },
}