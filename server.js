const path = require('path');

const express = require('express');
const fileUpload = require("express-fileupload");

var mongoose = require("mongoose");

const app = express();

const auth = require('./routes/auth');
const api = require('./routes/api');
const pro = require('./routes/api');


var cors = require("cors");
app.use(cors({origin: "*"}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload()  );
// let URL = 'mongodb://localhost:27017/'
let URL = 'mongodb+srv://CaptJackSparrow:GcLNtd0BR6xiW11b@educatcluster0.xr1hmp5.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', ()=>{
    console.log("connected to DB");
});
// app.get('/',console.log('happy'))
app.use('/api', api.api);
app.use('/auth', auth.auth);

const port = process.env.PORT || 3000;
app.listen(port);
