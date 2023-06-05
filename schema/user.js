const mongoose = require('mongoose');
const crypto = require("crypto");

const user = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    hash:String,
    salt:String,
    contact:String,
    
})

user.methods.setPassword = function (password) {

    // Creating a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex');

    // Hashing user's salt and password with 1000 iterations, 

    this.hash = crypto.pbkdf2Sync(password, this.salt,
        1000, 64, `sha512`).toString(`hex`);
};

// Method to check the entered password is correct or not 
user.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
};
const userr = module.exports = mongoose.model('ecomUser', user);