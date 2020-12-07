var express = require('express');
var router = express.Router();
const emailSubs = require("../Controllers/emailMarketing")

router.post("/create", emailSubs.create)
router.get("/show", emailSubs.getAllData)

module.exports = router;