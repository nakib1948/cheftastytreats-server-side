const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const chefs=require('./chefs.json')

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/chefs", async (req, res) => {
    
    res.send(chefs);
  });

app.get("/", (req, res) => {
  res.send("Simple curd is running");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});