const mongoose = require('mongoose');

const prod = mongoose.Schema({
    dateReg:Date,
    price:Number,
    qty:Number,
    img:String,
    id:String,  
    name:String,
    model:String,
    cat:String,
    desc:String,
    photo:String
    

})
module.exports = mongoose.model('productEcom', prod);