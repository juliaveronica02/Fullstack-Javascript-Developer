const express = require("express");
const router = express.Router();
const multer = require("multer");
const MenuController = require("../controllers/Menu");

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

router.get("/show", MenuController.getData);
router.post("/create", upload.single("image"), MenuController.createData);
router.delete("/delete/:menuId", MenuController.deleteDataById);
router.get("/show/:menuId", MenuController.getDataById);
router.put("/edit/:menuId",  upload.single("image"), MenuController.updateDataById);

module.exports = router;