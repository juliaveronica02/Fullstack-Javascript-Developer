var express = require('express');
var router = express.Router();
const User = require("../Controllers/User")

router.post("/register", User.register)
router.post("/login", User.login);
router.get("/show", User.getData);
router.get("/show/:userId", User.getDataById);
router.put("/edit/:userId", User.updateDataById);
router.delete("/delete/:userid", User.deleteDataById);
// router.put('/editPassword',validateUser,User.updatePasswordById)
// router.get ('/show',validateAdmin, User.getAllData)
module.exports = router;