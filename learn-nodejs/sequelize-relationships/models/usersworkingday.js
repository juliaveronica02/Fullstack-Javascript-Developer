'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersWorkingDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UsersWorkingDay.belongsTo(models.User, {foreignKey: 'userId'})
      UsersWorkingDay.belongsTo(models.WorkingDay, {foreignKey: 'workingDayId'})
    }
  };
  UsersWorkingDay.init({
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersWorkingDay',
  });
  return UsersWorkingDay;
};
/* 
NOTE: 
N:N = there is only one relationship left to manage and probably the most difficult. For this, we will need to describe the association in the 3 files concerned. (user.js, workingday.js, usersworkingday.js).
*/