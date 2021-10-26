// Importing Stuff
const { application } = require("express");
const express=require("express");
const mongoose=require("mongoose");
const AuthRoutes=require("./Routes/AuthRoutes");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv = require('dotenv');

const userProfile = require('./Routes/userProfile')

// Dotenv Stuff
dotenv.config();
const port = process.env.PORT;
const db = process.env.DB;


//App Stuff
const app=express();



//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//DB Stuff
const test = process.env.DB
console.log(test);

mongoose.connect(db,()=>
{
    console.log("Database in connected Successfully");
})


// Routes
app.get("/",(req,res)=>{res.send("All Fine")});
app.get('/testSample',async (req, res)=>
{
  
  res.status(200).json(
    {
      status: true,
      message: "OK"
    }
  )
})

app.use('/v1/auth',AuthRoutes);
app.use('/v1/profile', userProfile);
console.log(port);


//Listeners
module.exports = app;

