var express = require('express');
var router = express.Router();
const adminController = require("../Controllers/admin")

router.post("/register", adminController.createUser)
router.post("/login", adminController.login)
router.get("/show", adminController.getAllData)
router.get("/logout", adminController.logout);

module.exports = router;