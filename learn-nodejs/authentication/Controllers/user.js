const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const saltRounds = 12;
const privateKey = "null";

module.exports = {
  // create user.
  createUser: (req, res) => {
    // find user by email.
    UserModel.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user) {
        // if register with same email, show message email already exists.
        return res.status(401).json({ email: "Email already exists!" });
      } else {
        // find user by phone number.
        UserModel.findOne({ where: { phone: req.body.phone } }).then(
          (user) => {
            if (user) {
              return res
                .status(402)
                .json({ phone: "Phone Number already exists!" }); // write same phone when register, show message phone already exists.
            } else {
              // create new user (register), in postman must same with below field and before create at controller must check database and make it same.
              const newUser = new UserModel({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                passwordConfirm: req.body.passwordConfirm,
                phone: req.body.phone,
                tanggalLahir: req.body.tanggalLahir,
                gender: req.body.gender,
                role: req.body.role,
                kota: req.body.kota,
                productInterest: req.body.productInterest,
              });
              // hash password.
              bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(newUser.password, salt, function (err, hash) {
                  if (err) throw err;
                  newUser.password = hash; // hash password.
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
    // declare email and password.
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
                // expiresIn: 31556926, // 1 year in seconds.
                expiresIn: 60 * 60, // i hours.
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
      // only show id, username, email and phone number.
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
    // declare id.
    const { id } = req.params;
    // declare password, email, phone and kota.
    const { password, email, username, phone, kota } = req.body;
    if(id){
      // find one by id.
      UserModel.findOne({
        where: {id:id}
      })
      .then(user => {
        if(user) {
          // require password and email.
          if(password && email) {
            // hashing password.
            bcrypt.hash(password, saltRounds)
            .then(hash => {
              UserModel.update({
                // update below fields.
                email,
                username,
                phone,
                kota,
                updatedAt: new Date() + 7 // update time.
              }, {where: {id: id}}) // by id.
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
  // delete account by id example 1.
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
            res.status(400).send({ message: "Please input password" });
          }
        } else {
          res.status(500).send({ message: "User doesnt exist" });
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
    // declare email, phone and password.
    let {email, phone, password} = req.body
    // email and phone condition.
    let conditions = !!email ? {where: { email: email }} : { where:{phone: phone}};
    if(email) {
      conditions = {
        where:{email:email},
      }
    } else if (phone) {
      conditions = {
        where: {phone:phone},
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
              expiresIn: 60 * 60, // 1 hours.
            },
            (err, token) => {
              // show below data if success.
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
          // return error when enter incorrect password.
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
    });
  })
},
  // reset-password.
  // currentPassword, newPassword, confirmPassword.
  resetPassword: (req, res, next) => {
    // declare email.
    const email = req.body.email
    // find email on database.
    UserModel.findOne({where:{email:email}})
    .then(user => {
      if(user.length <1) {
        // no email found.
        return res.status(401).json({
          message: "Auth failed!"
        })
      }
      // declare password and newPassword.
      const {password, newPassword} = req.body
      bcrypt.compare(password, user.password, (err, result) => {
        console.log("password",result)
        if (err) {
            return res.status(401).json({
                message: 'Error! Something goes wrong'
            })
        }
        if (result) {
          // hash password.
          bcrypt.hash(newPassword, saltRounds, (err, hash) => {
              console.log(hash)
              if (err) { 
                return res.status(500).json({ error: err})
              } else {
                  user.password = hash
                  user.save() // save password.
                  user
                  .update(user)
                  .then((result) => {
                    //  password confirm.
                    if (req.body.newPassword !== req.body.passwordConfirm) {
                      res.json("Password undefined");
                    } else {
                      req.body.password == req.body.passwordConfirm;
                      return res.status(200).json({
                        message: 'Password changed!',
                        result: result,
                    })
                    }
                  })
                  .catch(err => {
                      res.status(500).json({ message: err.message })
                  })
              }
          })
        } else {
        return res.status(401).json({
          message: 'Auth failed'
        })
      }})
    })
  },
  // delete user by id example 2.
  deleteById2: (req,res, next) => {
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
                  res.status(200).send({ status: true, message: "Account deleted" })
                );
              } else {
                res.status(404).send({
                  status: false, message: "Wrong password"
                });
              }
            });
          } else {
            res.status(400).send({ status: false, message: "Please input password" });
          }
        } else {
          res.status(500).send({ status: false, message: "User doesnt exist" });
        }
      });
    } else res.status(417).send({ status: false, message: "Please specify User ID" });
  },
  // update user by id without email and password require.
  updateDataById2: (req, res) => {
    // update below fields.
    UserModel.update({
      email: req.body.email,
      phone: req.body.phone,
      username: req.body.username,
      kota: req.body.kota
    }, {where: {id: req.params.userId}}) // by id.
    .then((result) => res.json(result))
    .catch((err) => {
      throw err;
    });
  }
}