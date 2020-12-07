const banner130 = require("../models/banner130");

module.exports = {
  create: (req, res) => {
    banner130.create({
      images: req.file && req.file.path,
      name: req.body.name,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // getAll (show) berita.
  getAllData: (req, res) => {
    banner130.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};