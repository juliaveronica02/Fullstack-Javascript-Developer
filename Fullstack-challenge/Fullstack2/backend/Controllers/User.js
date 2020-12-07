const Models = require("../models");
const User = Models.User;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const privateKey = "null";
const saltRounds = 12;
// load input validation.
const validateRegister = require("../Validation/Register");
const validateLogin = require("../Validation/Login");

module.exports = {
    // user register.
    register: (req, res, next) => {
      //  check validation Register.
      const { errors, isValid } = validateRegister(req.body);
      // if not valid return status 400 (errors).
      if (!isValid) {
        return res.status(400).json(errors);
      }
      // email.
      User.findOne({ where: { email: req.body.email } }).then((user) => {
        if (user) {
          return res.status(401).json({ email: "Email already exists!" });
        } else {
          // phone.
          User.findOne({ where: { phone: req.body.phone } }).then((user) => {
            if (user) {
              return res.status(402).json({ phone: "Phone already exists!" });
            } else {
              // create users.
              const newUser = new User({
                username: req.body.username,
                image: req.file && req.file.path,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                passwordConfirm: req.body.passwordConfirm,
                role: req.body.role
              });
              //hash password.
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
                })
            }
          });
    },
    // user login.
    login: (req, res, next) => {
      const { errors, isValid } = validateLogin(req.body);
      // Check validation.
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const { email, password } = req.body;//simple one.
      
      // Find user by email.
      User.findOne({ where: {email: email} }).then((user) => {
        // Check if user exists.
        // console.log("user",user);
        if (!user) {
          return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password.
        bcrypt.compare(password, user.password).then((isMatch) => {
          console.log(isMatch);
          
          if (isMatch) {
            // User matched Create JWT Payload.
            const payload = {
              id: user.id,
              username: user.username,
            };
            // Sign token.
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
                  role: user.role
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
    // // admin login.
    // loginAdmin:(req,res, next) => {
    //   const email= req.body.email;
    //   console.log("email",email)
    //   User.findOne({ where: {email: email} })
    //   .then((user) =>{
    //      // check if "user" is null = means not registered.
    //     // check if user's email is the same as admin's email.
    //     if (!user || user.email !== "admin@gmail.com") {
    //       return res
    //         .status(404)
    //         .json({ status: "failed", error: "Admin's email not found" });
    //     } else {
    //       // password validation.
    //       if (bcrypt.compareSync(req.body.password, user.password)) {
    //         //  make payload so that when token is decoded in frontend this is the data that it will get.
    //         const payload = {
    //           id: user.id,
    //           email: user.email,
    //           username: user.username,
    //         };
    //         //  Sign token
    //         jwt.sign(
    //           payload,
    //           process.env.PRIVATE_KEY,
    //           { expiresIn: 31556926 }, // 1 year of expiration
    //           (err, token) => {
    //             res.json({
    //               status: "success",
    //               message: "You're an admin!",
    //               token: token,
    //             });
    //           }
    //         );
    //       } else {
    //         return res.status(404).json({
    //           status: "failed",
    //           error: "Password incorrect",
    //         });
    //       }
    //     }
    //   })
    //   .catch((error) => console.log(error));
    // },
    // get all user data.
    getData: (req, res) => {
        User.findAll({})
          .then((result) => res.json(result))
          .catch((err) => res.json(err));
      },
      // get user by id.
      getDataById: (req, res) => {
        User.findOne({ where: { id: req.params.userId } })
          .then((result) => res.json(result))
          .catch((err) => {
            throw err;
          });
      },
      // delete user data by id.
      deleteDataById: (req, res) => {
        User.destroy({ where: { id: req.params.userId } })
        .then(() => res.status.json({ msg: 'User has been deleted successfully!' }))
        .catch(err => res.status(500).json({ msg: 'Failed to delete!' }));
      },
      // update user by id.
      updateDataById: (req, res) => {
        User.update(
          {
            image: req.file && req.file.path,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
          },
          { where: { id: req.params.userId } }
        )
        .then(user => res.status(200).json({ user }))
        .catch(err => res.status(500).json({ err }));
      },
  }