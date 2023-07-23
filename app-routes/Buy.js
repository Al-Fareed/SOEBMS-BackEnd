
const express = require('express');
const router = express.Router();
const sellModel = require('./Content');
 
router.get('/', (req, res) => {
    console.log('Get Request working');
    sellModel.find()
        .then((val) => {
            res.json(val); // Send the JSON response with the fetched data
        })
        .catch((err) => {
            console.log('Could not fetch data\n', err);
            res.status(500).json({ error: 'Could not fetch data' });
        });
});

module.exports = router;