const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const home = require("./app-routes/Home");
const buy = require("./app-routes/buy");
const sell = require("./app-routes/Sell");
const newMeter = require("./app-routes/NewMeter");
const app = express();
const cors = require('cors');
app.use(bodyParser.json());

app.use(cors());
// Attach routes to their endpoints
app.use('/buy', buy);
app.use('/sell', sell);
app.use('/new', newMeter);
app.use('/', home);

// Connect to the database and start the server
mongoose.connect("mongodb+srv://AlFareed:Oyl1MxjZiH5FY96l@cluster0.urwkxxh.mongodb.net/soebms?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to Database');
    app.listen(8000);
  })
  .catch((err) => {
    console.log("Error in connecting", err);
  });
