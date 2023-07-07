const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const chefs=require('./chefs.json')
const recipes=require('./recipe.json')

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/chefs", async (req, res) => {
    
    res.send(chefs);
  });

  app.get('/recipes/:id', function(req, res) {
    const id=req.params.id;
   // console.log(typeof(id))
    const recipe=recipes.filter(r=>r.chef_id==id)
    res.send(recipe)
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});