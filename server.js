// Importing Stuff
const { application } = require("express");
const express=require("express");
const mongoose=require("mongoose");
const AuthRoutes=require("./Routes/AuthRoutes");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv = require('dotenv');

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
console.log(port);


//Listeners
app.listen(port,()=>{console.log(`Server Running  Successfully!. On Port: ${port}`)});

module.exports = app;
