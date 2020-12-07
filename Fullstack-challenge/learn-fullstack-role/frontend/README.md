axios — To make API calls. <br>
classnames —To conditionally join classNames together.<br>
history — To manage session history.<br>
prop-types — To type-check for React props.<br>
react-redux — Library that help React and Redux talk to each other.<br>
redux — Predictable state container.<br>
redux-thunk — A middleware for Redux.<br>

## Mongoose
## isAdmin validation
```javascript
const jwt = require("jsonwebtoken");
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY;

module.exports.validateUser = (req, res, next) => {
  jwt.verify(req.headers["x-access-token"], privateKey, (err, decoded) => {
    if (err) {
      res.status(401).json({
        ...err,
        message: "Sorry, it seems you haven't login. Try login again.",
      });
    } else {
      // validation so that user id of the user is same with the id user of the token.
      // decoded = decode si token dan dapatkan id dari si payload di controller.
      req.userId = decoded.id;
      next();
    }
  });
};

module.exports.validateAdmin = (req, res, next) => {
  jwt.verify(req.headers["x-access-token"], privateKey, (err, decoded) => {
    //   first, to delete you need to provide token. if no token nothing happen and will show (500 error).
    //   second, when you have token, the only token that can do the thing is only the token of admin.
    //   to validate admin is myself.
    if (decoded.email == "admin@gmail.com" && !err) {
      req.userId = decoded.id;
      next();
    } else {
      res.status(401).json({
        ...err,
        message: "Sorry, you're not an admin.",
      });
    }
  });
};
```

## router
```javascript
router.post("/loginadmin", usersController.loginAdmin);
router.get("/get/:userId", validateUser, usersController.getUserId);
router.delete("/delete/:userId", validateAdmin, usersController.deleteById);
```

## isAdmin Controllers
```javascript
// login as admin authentication.
  loginAdmin: (req, res, next) => {
    const email = req.body.email;
    UsersModel.findOne({ email }).then((user) => {
      // check if user's email is the same as admin's email.
      if (user.email !== "admin@gmail.com") {
        return res.status(404).json({ error: "Admin's email not found" });
      } else {
        // validation password
        if (bcrypt.compareSync(req.body.password, user.password)) {
          //  make payload so that when token is decoded in frontend this is the data that it will get
          const payload = {
            id: user.id,
            email: user.email,
            username: user.username,
          };
          //  Sign token
          jwt.sign(
            payload,
            process.env.PRIVATE_KEY,
            { expiresIn: 31556926 }, // 1 year of expiration
            (err, token) => {
              res.json({
                status: "success",
                message: "You're an admin!",
                data: token,
              });
            }
          );
        } else {
          return res
            .status(404)
            .json({ passwordincorrect: "Password incorrect" });
        }
      }
    });
  },
```
## .env
```javascript
PRIVATE_KEY = "write_anything_at_here"
PRIVATE_URL_MONGODB_LOCALHOST = "mongodb://localhost/fd-ecommerce-backend"
```