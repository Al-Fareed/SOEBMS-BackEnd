const express = require('express');
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
const sellModel = require('./Content');
app.use(express.json());

router.post("/post",async(req, res, next)=>{
    console.log('uploading data');
    console.log('sell page working');
    res.json({message:'Sell electricity'})
    const data = new sellModel({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        units:req.body.units
    })
    const val = data.save();
    res.json(val);
})
module.exports = router;