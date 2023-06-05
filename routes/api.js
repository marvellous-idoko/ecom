var express = require("express");
const api = express.Router();
const user = require('../schema/user')
const product = require('../schema/product');

api.get('/detials/:id', async (req, res) => {
    try {

        let prod = await product.findOne({ id: req.params.id })
        res.status(200).json({ code: 1, msg: prod })
    }
    catch (e) {
        res.status(500).json({ code: 0, msg: "err " + e })
    }
}).get('/buyProd', async (req, res) => {
    try {
        let prod = await product.findOne({ id: req.query.id })
        prod.qty = parseInt(prod.qty) - parseInt(req.query.qty)
        prod.save()
        res.status(200).json({ code: 1, msg: prod })

    } catch (e) {
        res.status(500).json({ code: 0, msg: "err " + e })
    }
}).post('/createProduct', async (req, res) => {
    let prod = new product()
    prod.qty = req.body.qty
    prod.id = Math.floor(Math.random() * 10000000000)
    prod.price = req.body.price
    prod.name = req.body.name
    prod.model = req.body.model
    prod.cat = req.body.category
    prod.dateReg =  Date.now()
    prod.photo = req.body.photo
    try {
            await prod.save()
            res.status(200).json({code:1,msg:'suucessfully uploaded your product'})
    
    } catch (e) {
        res.status(503).json({ code: 0, msg: "err " + e })

    }

})
exports.api = api