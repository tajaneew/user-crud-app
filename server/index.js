const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users");


const cors = require('cors')


app.use(express.json());
app.use(cors());


mongoose.connect(
"mongodb://localhost:27017/MERN-APP"
);


app.get("/getUsers", async (req, res) => {
try {
const users = await UserModel.find({});
res.json(users);
} catch (err) {
res.status(500).json(err);
}
}); //API GET request


app.post("/createUser", async (req, res) => {
try {
const user = req.body
const newUser = new UserModel(user);
await newUser.save();


res.json(newUser);
} catch (error) {
res.status(500).json({ error: "Failed to create user" });
}
});
app.listen(3001, () => {
console.log("server runs")
});