const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const home = require("./app-routes/Home");
const app = express();

app.use(bodyParser.json());
app.get('/',home);

mongoose.connect(
    "mongodb+srv://AlFareed:Oyl1MxjZiH5FY96l@cluster0.urwkxxh.mongodb.net/soebms?retryWrites=true&w=majority"
).then(()=>{
    console.log('Connected to Database');
    app.listen(5000);
    
}) .catch(() => {
    console.log("Error in connecting");
  });