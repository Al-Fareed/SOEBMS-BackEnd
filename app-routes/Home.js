const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('Get Request working');
    res.json({message:'Home page'})
});

module.exports = router;