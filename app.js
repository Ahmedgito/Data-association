const express = require("express");
const userModel = require('./models/user')
const postsModel = require('./models/posts')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

    let user = await userModel.create({
        username: "Ahmed",
        age: 25,
        email: "ahmed@gmail.com",

    });

    res.send(user) ;

});


app.listen(3000);