var express = require('express');
var router = express.Router();
const beritaController = require("../Controllers/berita")
// import multer module.
const multer = require("multer")

// setting up a middleware specifying the destination for storing the images.
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

router.post("/create", upload.single("imageURL"), beritaController.create)
router.get("/show", beritaController.getAllData)
router.get("/show/:beritaId", beritaController.getDataById)
router.put("/edit/:beritaId", upload.single("imageURL"), beritaController.updateDataById)
router.delete("/delete/:beritaId", beritaController.deleteDataById)

module.exports = router;