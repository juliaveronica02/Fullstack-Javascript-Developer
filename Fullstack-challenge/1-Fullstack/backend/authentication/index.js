// import package.
const jwt = require("jsonwebtoken");
const privateKey = "testing123";

const controllers = {
  // send message if token valid.
  valid: async (req, res) => {
    res.status(200).send({ message: "Token is valid!" });
  },
  // verify token.
  verifyToken: async (req, res, next) => {
    // header authorization at postman.
    const DevToken =
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"; // using "Bearer" word and put token.
    if (DevToken) {
      const token = req.headers.authorization.split(" ")[1] || "";
      jwt.verify(token, privateKey, (error, decoded) => {
        if (error) {
          res.status(417).send({
            message: "Token is invalid"
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.status(400).send({
        message: "Please specify the token in request headers"
      });
    }
  },
  // Verify token for user.
  verifyTokenAsUser: async (req, res, next) => {
    const DevToken =
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer";
    if (DevToken) {
      const token = req.headers.authorization.split(" ")[1] || "";
      jwt.verify(token, privateKey, (error, decoded) => {
        if (error) {
          res.status(417).send({
            message: "Token is invalid"
          });
        } else {
          req.decoded = decoded;
          let role = decoded.role;
          if (role === "user") {
            next();
          } else {
            res.status(417).send({
              message: "This is not users token"
            });
          }
        }
      });
    } else {
      res.status(400).send({
        message: "Please specify the token in request headers"
      });
    }
  },
  // verify token as admin.
  verifyTokenAsAdmin: async (req, res, next) => {
    const DevToken =
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer";
    if (DevToken) {
      const token = req.headers.authorization.split(" ")[1] || "";
      jwt.verify(token, privateKey, (error, decoded) => {
        if (error) {
          res.status(417).send({
            message: "Token is invalid"
          });
        } else {
          req.decoded = decoded;
          let role = decoded.role;
          if (role === "admin") {
            next();
          } else {
            res.status(417).send({
              message: "This is not admin token"
            });
          }
        }
      });
    } else {
      res.status(400).send({
        message: "Please specify the token in request headers"
      });
    }
  },
  // verify login token.
  verifyLogin: async (req, res, next) => {
    const DevToken =
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer";
    if (DevToken) {
      const token = req.headers.authorization.split(" ")[1] || "";
      jwt.verify(token, privateKey, (error, decoded) => {
        if (error) {
          next();
        } else {
          req.decoded = decoded;
          let username = decoded.username;
          let role = decoded.role;
          if (req.body.username === username) {
            res.status(417).send({
              message: "Your are still logged in",
              username,
              role
            });
          } else {
            res.status(417).send({
              message: "Wrong credentials"
            });
          }
        }
      });
    } else {
      next();
    }
  }
};

module.exports = controllers;
