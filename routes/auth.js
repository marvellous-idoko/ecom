var express = require("express");
const auth = express.Router();
const user = require('../schema/user')
const crypto = require('crypto')

auth.post('/signin', async (req, res) => {
    try {
        let acct = await user.findOne({ email: req.body.email })
        if (acct == null) {

            res.status(200).json({ code: 0, msg: 'user not found' })
        }
        else {

            if (acct.validPassword(req.body.pwd)) {
                acct.hash = ''
                acct.salt = ''
                res.status(200).json({ code: 1, msg: acct })
            } else {
                res.status(200).json({ code: 0, msg: 'incorrect password' })
            }
        }
    }
    catch (e) {
        res.status(503).json({ code: 0, msg: 'server error ' + e })
    }
})
auth.post('/signup', async (req, res) => {
    try {
        let yu = await user.find({ email: req.body.email })
        if (yu.length != 0) {
            res.json({ code: 0, msg: "email already exists" })
        } else {

            console.log(req.body.pwd)
            let hsh = pwdHasher(req.body.pwd)

            let u = new user()
            u['name'] = req.body.name
            u['email'] = req.body.email
            u['contact'] = req.body.contact
            u['hash'] = hsh['hash']
            u['salt'] = hsh['salt']
            u.save()
            res.status(200).json({ code: 1, msg: "successfully registered user" })
        }
    }
    catch (e) {
        res.status(500).json({ code: 0, msg: 'server error ' + e })
    }
})
function pwdHasher(pwd) {
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(pwd, salt,
        1000, 64, `sha512`).toString(`hex`);
    return { hash: hash, salt: salt }
}
exports.auth = auth