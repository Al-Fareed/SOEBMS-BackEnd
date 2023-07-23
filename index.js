const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const home = require("./app-routes/Home");
const buy = require("./app-routes/buy");
const sell = require("./app-routes/Sell");
const app = express();

app.use(bodyParser.json());

// Attach routes to their endpoints
app.use('/home', home);
app.use('/buy', buy);
app.use('/sell', sell);

// Connect to the database and start the server
mongoose.connect("mongodb+srv://AlFareed:Oyl1MxjZiH5FY96l@cluster0.urwkxxh.mongodb.net/soebms?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to Database');
    app.listen(5000);
  })
  .catch((err) => {
    console.log("Error in connecting", err);
  });
