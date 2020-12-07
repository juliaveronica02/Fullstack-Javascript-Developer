// TRUE TABLE.
const { INTEGER } = require("sequelize");
const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || "development";
const config = (require = require(__dirname + "/../config/config.json")[[env]]);
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

const BeritaModel = sequelize.define(
    "Berita",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        imageURL: {
            type: Sequelize.DataTypes.STRING,
            required: true,
        },
        title: {
            type: Sequelize.STRING,
            required: true,
        },
        description: {
            type: Sequelize.STRING,
            required: true,
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE
        },
        written: {
            type: Sequelize.STRING,
            required: true
        },
        email: {
            type: Sequelize.STRING,
            required: false
        }
    },
    {freezeTableName: true}
)
module.exports = BeritaModel;