const path = require("path");

const express = require("express");
const app = express();
// const fileUpload = require("express-fileupload");

var mongoose = require("mongoose");

const actProds = require("../schema/activeProd");

// const auth = require("./routes/auth");
// const api = require("./routes/api");
const Prod = require("./producer");
const prdcr = new Prod();

// var cors = require("cors");
// app.use(cors({ origin: "*" }));

const amqp = require("amqplib");
const config = {
  url: "amqps://braczsey:P-7s2hdK4zkm2BTNgGXkSZPe3D08whDQ@gerbil.rmq.cloudamqp.com/braczsey",
  exgNme: "storeExch",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(fileUpload());
// let URL = 'mongodb://localhost:27017/'
let URL =
  "mongodb+srv://CaptJackSparrow:GcLNtd0BR6xiW11b@educatcluster0.xr1hmp5.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("connected to DB");
});
// app.use("/api", api.api);
// app.use("/auth", auth.auth);
// const port = process.env.PORT || 8000;
// app.listen(port);
async function receiver() {
  const cntn = await amqp.connect(config.url);
  const chnl = await cntn.createChannel();
  await chnl.assertExchange(config.exgNme, "direct");
  const q = await chnl.assertQueue("infoQueue");
  await chnl.bindQueue(q.queue, config.exgNme, "info");
  chnl.consume(q.queue, (msg) => {
    console.log(msg);
    chnl.ack(msg);
  });
}
async function deleteReceiver() {
  const cntn = await amqp.connect(config.url);
  const chnl = await cntn.createChannel();
  await chnl.assertExchange(config.exgNme, "direct");
  const q = await chnl.assertQueue("infoQueue");
  await chnl.bindQueue(q.queue, config.exgNme, "delete");
  chnl.consume(q.queue, (msg) => {
    console.log(msg);
    chnl.ack(msg);
  });
}
async function insertReceiver() {
  const cntn = await amqp.connect(config.url);
  const chnl = await cntn.createChannel();
  await chnl.assertExchange(config.exgNme, "direct");
  const q = await chnl.assertQueue("infoQueue");
  await chnl.bindQueue(q.queue, config.exgNme, "insert");
  chnl.consume(q.queue, (msg) => {
    console.log(msg);
    chnl.ack(msg);
  });
}

async function searchReceiver() {
  const cntn = await amqp.connect(config.url);
  const chnl = await cntn.createChannel();
  await chnl.assertExchange(config.exgNme, "direct");
  const q = await chnl.assertQueue("infoQueue");
  await chnl.bindQueue(q.queue, config.exgNme, "isAvailable");
  chnl.consume(q.queue, (msg) => {
    console.log(msg);
    chnl.ack(msg);
  });
}
async function srchRespdr(id) {
  let f = await actProds.find({ id: id });
  if (f.length === 0) {
    await prdcr.pubMsg("available", JSON.stringify({ msg: false }));
  } else {
   await prdcr.pubMsg("available", JSON.stringify({ msg: true }));
  }
}
async function deleteRecord(id) {
  actProds.deleteOne({ id: id });
}
async function insert(info) {
  let r = new actProds(JSON.parse(info));
  r.save();
}
