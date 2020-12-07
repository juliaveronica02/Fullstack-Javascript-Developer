const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const UserModel = sequelize.define(
    "Users",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        Fullname: {
            type: Sequelize.STRING,
            required: true,
        },
        Email: {
            type: Sequelize.STRING,
            required: true,
        },
        Password: {
            type: Sequelize.STRING,
            required: true,
        },
        Phone: {
            type: Sequelize.NUMBER,
            required: true,
        },
        Role: {
            type: Sequelize.STRING,
            required: true
        },
        Kota: {
            type: Sequelize.STRING,
            required: true
        }
    },
    {freezeTableName: true,
        timestamps: false}
)
module.exports = UserModel;