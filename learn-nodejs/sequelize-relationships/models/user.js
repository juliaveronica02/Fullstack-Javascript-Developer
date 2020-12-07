'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
      User.belongsToMany(models.WorkingDay, {through: 'UsersWorkingDays', foreignKey: 'userId', as: 'days'})
    }
  };
  User.init({
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

/* 
NOTE: 
1:1 = The first relationship is a User belongs to a Company.
N:N = there is only one relationship left to manage and probably the most difficult. For this, we will need to describe the association in the 3 files concerned. (user.js, workingday.js, usersworkingday.js).
*/