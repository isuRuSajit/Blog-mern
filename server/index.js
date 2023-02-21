const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const salt = bcrypt.genSaltSync(10);
const User = require("./models/User");

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running ");
});

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://isuru:isuru@cluster0.ka0mcg5.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      writeConcern: { w: "majority", j: true, wtimeout: 1000 },
    }
  )
  .then(() => console.log("Database Successfully Connected"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running on Port - ${port}`);
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

module.exports = app;
