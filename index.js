const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const home = require("./app-routes/Home");
const buy = require("./app-routes/buy");
const sell = require("./app-routes/Sell");
const app = express();

app.use(bodyParser.json());
app.get('/',home);
app.get('/buy',buy);
app.get('/sell',sell);

mongoose.connect(
    "mongodb+srv://AlFareed:Oyl1MxjZiH5FY96l@cluster0.urwkxxh.mongodb.net/soebms?retryWrites=true&w=majority"
).then(()=>{
    console.log('Connected to Database');
    app.listen(5000);
    
}) .catch(() => {
    console.log("Error in connecting");
  });