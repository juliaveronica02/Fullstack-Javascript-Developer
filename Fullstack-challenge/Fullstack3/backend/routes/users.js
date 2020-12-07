var express = require('express');
const userController = require("../Controllers/User");
var router = express.Router();

router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/show", userController.getData);

module.exports = router;