const mongoose = require('../config/db_connection');

const userSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    email : String,
    phone_num : Number,
    otp : {
        type : Number,
        default : null
    }
}, {timestamps: true}) 

module.exports = mongoose.model("user", userSchema)