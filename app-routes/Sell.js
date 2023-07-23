const express = require('express');
const app = express();
const router = express.Router();
const sellModel = require('./Content');
app.use(express.json());

router.post("/post", async (req, res, next) => {
    console.log('uploading data');
    console.log('sell page working');
    const data = new sellModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      units: req.body.units
    });
  
    try {
      const val = await data.save();
      res.json(val);
    } catch (error) {
      console.log('Could not save data\n', error);
      res.status(500).json({ error: 'Could not save data' });
    }
  });
  
module.exports = router;