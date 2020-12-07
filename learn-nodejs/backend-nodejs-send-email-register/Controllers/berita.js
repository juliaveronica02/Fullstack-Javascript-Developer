const BeritaModel = require("../models/berita");

module.exports = {
  create: (req, res) => {
    BeritaModel.create({
      title: req.body.title,
      imageURL: req.file && req.file.path,
      description: req.body.description,
      written: req.body.written,
      email: req.body.email,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // getAll (show) berita.
  getAllData: (req, res) => {
    BeritaModel.findAll()
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  // update byId.
  updateDataById: (req, res) => {
    BeritaModel.update(
      {
        title: req.body.title,
        imageURL: req.file && req.file.path,
        description: req.body.description,
        written: req.body.written,
      },
      { where: { id: req.params.beritaId } }
    )
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // delete berita by id.
  deleteDataById: (req, res) => {
    BeritaModel.destroy({ where: { id: req.params.beritaId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
   // get berita by id.
   getDataById: (req, res) => {
    BeritaModel.findOne({ where: { id: req.params.beritaId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  }
};
