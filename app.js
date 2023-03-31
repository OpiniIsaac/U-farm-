const express = require('express');
const { resolve } = require('path');
const app = express();
const path = require("path");
const { title } = require('process');
const router = express.Router();
const mongoose= require("mongoose")
const bodyParser= require("body-parser")


// importing routes
const AO_dashboard_Router = require('./routes/AO_dashboard')


// // we are creating an eviroment file
// // require("dotenv").config();

// // importing database file directly


// // support parsing of application/json type post data
// app.use(bodyParser.json());

// //support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));

// // creating a connection between the controller and the database
// mongoose.connect(config.database,{
//   //useNew collects data from the front end then formats it
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// const db= mongoose.connection
// // checking if db has connected
// db.once("open", ()=>{
//   console.log("connected to db")
// })
// db.on("error",(err)=>{
// console.error(err)
// })

app.set("view engine","pug"); 
app.set("views", path.join(__dirname ,"views"));
app.use(express.static(path.join(__dirname, "public")));

router.get('/',(req, res)=> {
    res.render('AO_dashboard');
  });

app.listen(3000, () => console.log('listening on port 3000')); 