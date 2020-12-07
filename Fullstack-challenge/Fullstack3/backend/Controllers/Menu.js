const Models = require("../models")
const Detail = Models.Detail;
const Category = Models.Category;

module.exports = {
    create: (req, res) => {
      Detail.create({
        name: req.body.name,
        price: req.body.price,
        detail: req.body.detail,
        categoryId: req.body.categoryId,
      })
        .then((result) => res.json(result))
        .catch((err) => {
          throw err;
        });
    },
    getAllData: (req, res) =>{
        Detail.findAll({
            include: [
              {
                model: Category,
                as: "category",
              },
            ],
          })
            .then((result) => res.json(result))
            .catch((err) => {
              throw err;
            });
    },
    //get user by id.
  getDataById: (req, res) => {
    Detail.findOne({ where: { id: req.params.menuId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
  //delete user data by id.
  deleteDataById: (req, res) => {
    Detail.destroy({ where: { id: req.params.menuId } })
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
}