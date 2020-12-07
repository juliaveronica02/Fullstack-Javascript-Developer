const banner400 = require("../models/banner400");

module.exports = {
  create: (req, res) => {
    banner400.create({
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
    banner400.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};