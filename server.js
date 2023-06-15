const path = require('path');

const express = require('express');
const fileUpload = require("express-fileupload");

var mongoose = require("mongoose");

const app = express();

const auth = require('./routes/auth');
const api = require('./routes/api');


var cors = require("cors");
app.use(cors({origin: "*"}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload()  );
let URL = 'mongodb://localhost:27017/'

mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', ()=>{
    console.log("connected to DB");
});
// app.get('/',console.log('happy'))
app.use('/api', api.api);
app.use('/auth', auth.auth);
// app.use('/CSS', (req,res)=>{
//     // console.log(__dirname+'/CSS'+req.url)
//     res.sendFile(__dirname+'/CSS'+req.url)
// });
// app.use('/img', (req,res)=>{
//     // console.log(__dirname+'/CSS'+req.url)
//     res.sendFile(__dirname+'/img'+req.url)
// });

// app.use('/routes/images', (req,res)=>{
//     console.log()
//     res.sendFile(__dirname+'/routes/images'+req.url)
// });
// app.use('/JS', (req,res)=>{
//     // console.log(__dirname+'/CSS'+req.url)
//     res.sendFile(__dirname+'/JS'+req.url)
// });

// app.use((req, res, next) => {
//     res.render('nsd', {pageTitle: "Page Not Found"})
// });
const port = process.env.PORT || 3000;
app.listen(port);
