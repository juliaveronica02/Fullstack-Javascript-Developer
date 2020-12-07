const Models = require("../models")
const User = Models.User
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const privateKey = "privateKey"
const saltRounds = 12;

module.exports = {
    register: (req,res,next) =>{
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
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
        })
    },
    // user login.
  login: (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email.
    User.findOne({ where: {email: email} }).then((user) => {
        //   console.log(user);
        // Check if user exists
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
            name: user.name,
          };
          // Sign token.
          jwt.sign(
            payload,
            privateKey,
            {
              // expiresIn: 31556926, // 1 year in seconds.
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
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // update user by id.
  updateDataById: (req, res) => {
    User.update(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      { where: { id: req.params.userId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
}