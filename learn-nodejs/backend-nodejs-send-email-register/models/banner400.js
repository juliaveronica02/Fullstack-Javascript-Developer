// TRUE TABLE.
const { INTEGER } = require("sequelize");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = (require = require(__dirname + "/../config/config.json")[[env]]);
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

const banner400Model = sequelize.define(
    "banner400",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        images: {
            type: Sequelize.DataTypes.STRING,
            required: true,
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            required: true,
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    },
    {freezeTableName: true}
)
module.exports = banner400Model;