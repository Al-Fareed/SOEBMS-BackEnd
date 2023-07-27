const express = require('express');
const app = express();
const router = express.Router();
const newMeter = require('./NewMeterModel');
app.use(express.json());

router.post("/", async (req, res, next) => {
    const data = new newMeter({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      landmark: req.body.landmark
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