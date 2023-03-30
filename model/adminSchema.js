const mongoose = require('../config/db_connection');

const adminSchema = new mongoose.Schema({
    email : String,
    password : String,
    token : String
}, {timestamps : true})

module.exports = mongoose.model("admin", adminSchema)