const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Step 1: Create a schema for the power usage data
const powerUsageSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  values: {
    type: [Number],
    required: true,
  },
});

// Step 2: Create a schema for the user's power usage
const userPowerUsageSchema = new Schema({
  _id: {
    type: String, // Assuming the userID is a string (e.g., "64bcb0e228523cd71278aa3b")
    required: true,
  },
  powerUsage: {
    type: [powerUsageSchema],
    required: true,
  },
});

// Step 3: Define a model based on the user power usage schema
const UserPowerUsage = mongoose.model('power_usage', userPowerUsageSchema);

const router = require('express').Router();

// Step 4: Fetch the data from the database using the defined model
router.get('/', (req, res, next) => {
    console.log("start fetching ");
  UserPowerUsage.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log('Error fetching data', err);
      res.status(500).json({ error: 'Could not fetch data' });
    });
});

module.exports = router;
