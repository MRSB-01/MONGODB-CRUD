const expresss = require("express");
const app = expresss();

const userModel = require("./usermodel");


app.get("/", (req, res) => {
  res.send("Hey");
});

app.get("/create", async (req, res) => {
    const createduser = await userModel.create({
        name: "Sachin",
        email: "v@.com",
        username: "sb dada"
    });

    res.send(createduser);
});

app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});

app.get("/update", async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({username: "sb dada"}, {name: "Dadu"}, {new: true});

    res.send(updateduser);
});

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "sb dada"});
    res.send(users);
});


app.listen(3000);