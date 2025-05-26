
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/data_ass");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    Age: Number,
    posts: Array,
})

module.exports = mongoose.model('user' , userSchema) ; 