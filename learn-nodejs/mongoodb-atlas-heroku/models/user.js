const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserModel = new Schema(
    {
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        daftar: {
            type: String,
            required: true
        },
        kota: {
            type: String,
            required: true
        }
    },
    { timestamps: true } // to set time.
)
module.exports = mongoose.model("user", UserModel)