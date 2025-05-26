const express = require("express");
const userModel = require('./models/user')
const postModel = require('./models/post')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {

    req.send("WELCOME");

});

app.get("/create", async (req, res) => {

    let user = await userModel.create({
        username: "Ahmed",
        Age: 21,
        email: "mamooabid1@gmail.com"

    })

    res.send(user);

});

app.get("/post/create", async (req, res) => {

    let post = await postModel.create({
        postdata: "HELLO AHMED",
        user: '6834f2775b036b3ef6a0723c',
    })

    let user = await userModel.findOne({
        _id: "6834f2775b036b3ef6a0723c"
    });

    user.posts.push(post._id);
    await user.save();

    res.send({post , user});

});



app.listen(3000);