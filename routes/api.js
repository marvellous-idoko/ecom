var express = require("express");
const api = express.Router();
const user = require("../schema/user");
const product = require("../schema/product");

api
  .get("/detials/:id", async (req, res) => {
    try {
      let prod = await product.findOne({ id: req.params.id });
      res.status(200).json({ code: 1, msg: prod });
    } catch (e) {
      res.status(500).json({ code: 0, msg: "err " + e });
    }
  })
  .get("/buyProd", async (req, res) => {
    try {
      let prod = await product.findOne({ id: req.query.id });
      prod.qty = parseInt(prod.qty) - parseInt(req.query.qty);
      prod.save();
      res.status(200).json({ code: 1, msg: prod });
    } catch (e) {
      res.status(500).json({ code: 0, msg: "err " + e });
    }
  })
  .post("/createProduct", async (req, res) => {
    let prod = new product();
    prod.qty = req.body.qty;
    prod.id = Math.floor(Math.random() * 10000000000);
    prod.price = req.body.price;
    prod.name = req.body.name;
    prod.model = req.body.model;
    prod.cat = req.body.category;
    prod.dateReg = Date.now();
    prod.photo = req.body.photo;
    prod.desc = req.body.desc;
    try {
      console.log(await prod.save());
      res
        .status(200)
        .json({ code: 1, msg: "suucessfully uploaded your product" });
    } catch (e) {
      res.status(503).json({ code: 0, msg: "err " + e });
    }
  })
  .get("/getAllProducts", async (req, res) => {
    try {
      res.json({ code: 1, msg: await product.find() });
    } catch (e) {
      res.status(500).json({ code: 0, msg: "err " + e });
    }
  })
  .get("/getProdDetails/:id", async (req, res) => {
    try {
      res.json({ code: 1, msg: await product.findOne({ id: req.params.id }) });
    } catch (e) {
      res.status(500).json({ code: 0, msg: "err " + e });
    }
  })
  .get("/chkAvl/:id/:qty", async (req, res) => {
    try {
      let prd = await product.findOne({ id: req.params.id });
      let qty = parseInt(prd["qty"]);
      if (qty > 0 && prd.lock == false) {
        if (qty >= parseInt(req.params.qty)) {
          res.status(200).json({ code: 1, msg: "available", avail: true });
        } else {
          res
            .status(200)
            .json({
              code: 1,
              msg: "available, but less",
              avail: true,
              qty: qty,
            });
        }
      } else {
        res.status(200).json({ code: 1, msg: "not available", avail: false });
      }
    } catch (e) {
      res.status(500).json({ code: 0, msg: "err " + e });
      console.log(e);
    }
  })
  .get("/lockProd/:id", async (req, res) => {
    try {
        console.log(req.params)
      let y = await product.findById(req.params.id);
      y.lock = true;
      y.save();
      console.log(y.lock)
      res.json({ code: 1, msg: y.lock });
    } catch (e) {
      res.status(500).json({ code: 0, msg: "err " + e });
      console.log(e);
    }
  })
  .get("/checkout/:id/:qty", async (req, res) => {
    try {
        console.log(req.params)
      let y = await product.findById(req.params.id);
      y.qty = y.qty - parseInt(req.params.qty);
      y.lock = false;
      y.save();
      res.json({ code: 1, msg: y.lock });
    } catch (e) {
      res.status(500).json({ code: 0, msg: "err " + e });
      console.log(e);
    }
  })
  .post("/releaseGoods", async (req, res) => {
    try {
      let cart = req.body;
      for (let index = 0; index < cart.length; index++) {
        let y = await product.findById(cart[index]["_id"]);
        y.qty = y.qty + parseInt(cart[index]["qtyOrdered"]);
        y.lock = false;
        y.save();
      }
    } catch (e) {
      res.status(500).json({ code: 0, msg: "err " + e });
      console.log(e);
    }
  });

exports.api = api;
