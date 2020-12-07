const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const saltRounds = 12;
const privateKey = "null";

module.exports = {
  // create user.
  createUser: (req, res) => {
    UserModel.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user) {
        return res.status(401).json({ email: "Email already exists!" });
      } else {
        UserModel.findOne({ where: { username: req.body.username } }).then(
          (user) => {
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
                phone: req.body.phone,
                ttl: req.body.ttl,
                gender: req.body.gender,
                role: req.body.role,
                kota: req.body.kota,
                productInterest: req.body.productInterest,
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
      UserModel.findOne({ where: { email: email } }).then((user) => {
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
                  success: true + " " + "Users Session",
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
    UserModel.findAll({
      attributes: ["id", "username", "email", "phone"]
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
    // get user by id.
    getDataById: (req, res) => {
      UserModel.findOne({ where: { id: req.params.userId } })
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
     // update user by id.
  updateDataById: (req, res) => {
    const { id } = req.params;
    const { password, email, username, phone, kota } = req.body;
    if(id){
      UserModel.findOne({
        where: {id:id}
      })
      .then(user => {
        if(user) {
          if(password && email) {
            bcrypt.hash(password, saltRounds)
            .then(hash => {
              UserModel.update({
                email,
                password: hash,
                username,
                phone,
                kota,
                updatedAt: new Date() + 7
              }, {where: {id: id}})
            })
            .then(() => {
              res.status(200).send({
                message: "Profile Updated!"
              })
            })
          } else {
            res.status(417).send({
              message: "Please specify password field and email!"
            })
          }
        } else {
          res.status(404).send({
            message: "User Not Found!"
          })
        }
      })
    }else {
      res.status(401).send({
        message: "Please specify User ID!"
      })
    }
  },
  // delete account.
  deleteById: (req,res) => {
    const id = Number(req.params.id);
    const { password } = req.body;
    if (id) {
      // findById change to findByPk.
      UserModel.findByPk(id).then(users => {
        if (users) {
          if (password) {
            bcrypt.compare(password, users.password).then(response => {
              if (response) {
                UserModel.destroy({ where: { id: id } }).then(() =>
                  res.status(200).send({ message: "Account deleted" })
                );
              } else {
                res.status(404).send({
                  message: "Wrong password"
                });
              }
            });
          } else {
            res.status(417).send({ message: "Please input password" });
          }
        } else {
          res.status(404).send({ message: "User doesnt exist" });
        }
      });
    } else res.status(417).send({ message: "Please specify User ID" });
  },
  // logout.
  logout: (req, res) => {
    res.status(200).send({ message: "Logout successfully!" });
  },
  // user login version 2.
  // user can login with phone or email.
  loginAuthentication: (req, res, next) => {
    let {email, phone, password} = req.body
    let conditions = !!email ? {where: { email: email }} : { where:{phone: phone}};
    if(email) {
      conditions = {
        email,
      }
    } else if (phone) {
      conditions = {
        phone,
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
                success: true + " " + "Users Session",
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
}