const mongoose = require('mongoose');

const Stdnt = mongoose.Schema({
    dateReg:Date,
    price:Number,
    qty:Number,
    img:String,
    id:String,  
    name:String,
    model:String,
    cat:String,
    desc:String

})
module.exports = mongoose.model('nataUser', Stdnt);