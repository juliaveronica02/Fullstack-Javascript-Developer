var express = require('express');
var router = express.Router();
const banner130Controller = require("../Controllers/banner130")
// import multer module.
const multer = require("multer")

// setting up a middleware specifying the destination for storing the images.
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        // folder public - images - create folder banner130.
      cb(null, "./public/images/banner130/");
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + file.originalname);
    },
  });
  const fileFilter = (req, file, cb) => {
    // image type.
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });


// created route and sharp configure.
router.post("/create", upload.single("images"), banner130Controller.create, (req, res, next) => {
    try {
        // sharp configure.
        sharp(req.file.path).resize(250, 130).toFile('banner130/' + 'thumbnails-' + req.file.originalname, (err, resizeImage) => {
            if (err) {
                console.log(err);
            } else {
                console.log(resizeImage);
            }
        })
        return res.status(201).json({
            message: 'File uploded successfully'
        });
    } catch (error) {
        console.error(error);
    }
})
/*
    NOTE!!
    1. sharp function takes file path to be processed.
    2. resize function takes the width and height sizes of the image.
    3. to file function takes a storage path to store the processed files.
*/

router.get("/show", banner130Controller.getAllData)

module.exports = router;