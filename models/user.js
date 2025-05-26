const mongoose = require("mongoose");
const post = require("./post");

mongoose.connect("mongodb://127.0.0.1:27017/data_ass");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    Age: Number,
    posts: [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'post',
    }],
})

module.exports = mongoose.model('user' , userSchema) ; 