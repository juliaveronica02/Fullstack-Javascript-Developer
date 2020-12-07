'use strict';
var Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Detail = sequelize.define('Detail', {
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    price: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {});
  Detail.associate = function(models) {
    // associations can be defined here
    Detail.belongsTo(models.Category, {
      as:"category", foreignKey:"categoryId",
    })
  };
  return Detail;
};