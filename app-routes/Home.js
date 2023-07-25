const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const userPowerUsageSchema = new Schema({
  _id: {
    type: String, 
    required: true,
  },
  powerUsage: {
    type: [powerUsageSchema],
    required: true,
  },
});

const UserPowerUsage = mongoose.model('power_usage', userPowerUsageSchema);

const router = require('express').Router();

router.get('/', (req, res, next) => {
    UserPowerUsage.find({ _id: "64bcb0e228523cd71278aa3b" }) // Only fetch the document with the specified _id
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json({ error: 'User not found' });
      } else {
        // Extract the powerUsage array from the fetched data
        const powerUsage = data[0].powerUsage;
        res.json(powerUsage);
      }
    })
    .catch((err) => {
      console.log('Error fetching data', err);
      res.status(500).json({ error: 'Could not fetch data' });
    });
});

module.exports = router;
