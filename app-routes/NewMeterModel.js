const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newMeterModel = new Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    phone:{type:Number, required: true},
    address:{type:String, required: true},
    landmark:{type:String, required: true}
})

module.exports = mongoose.model('new-meter', newMeterModel);