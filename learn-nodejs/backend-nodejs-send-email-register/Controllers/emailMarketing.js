const emailSubs = require("../models/emailMarketing");

module.exports = {
  create: (req, res) => {
    emailSubs.create({
      email: req.body.email,
    })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  // getAll (show) berita.
  getAllData: (req, res) => {
    emailSubs.findAll({})
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};