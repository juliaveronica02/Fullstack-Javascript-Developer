var express = require('express');
var router = express.Router();
const userController = require("../Controllers/user")

router.post("/register", userController.createUser)
router.post("/login", userController.login)
router.post("/login2", userController.loginAuthentication)
router.get("/show", userController.getAllData)
router.get("/show/:userId", userController.getDataById)
router.get("/logout", userController.logout);
router.put("/update/:id", userController.updateDataById);
router.delete("/delete/:id", userController.deleteById);

module.exports = router;