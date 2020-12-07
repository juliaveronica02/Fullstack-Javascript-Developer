// usersWorkingDays.
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UsersWorkingDays', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // user hasMany workingDays n:n.
          model: 'users',
          key: 'id'
        }
      },
      workingDayId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // workingDays hasMany users n:n.
          model: 'workingDays',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UsersWorkingDays');
  }
};