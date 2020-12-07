const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../Controllers/User")
// const { validateAdmin, validateUser } = require("../Validation/Admin");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

router.post("/register", upload.single("image"), User.register);
router.post("/login", User.login);
router.post("/login", User.login);
router.get("/show", User.getData);
router.get("/show/:menuId", User.getDataById);
router.delete("/delete/:menuId", User.deleteDataById);
router.put("/edit/:menuId",  upload.single("image"), User.updateDataById);

module.exports = router;