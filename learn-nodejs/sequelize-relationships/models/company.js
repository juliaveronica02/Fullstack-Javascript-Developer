'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.User, {as: 'employes'})
    }
  };
  Company.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};

/* 
NOTE: 
1:N = Knowing that a company has several Users we can add the 1:N relationship in the Company model. 
Rename the user model using an alias (employes) for more clarity, and put this alias in the plural 
because the relationship is hasMany.
*/