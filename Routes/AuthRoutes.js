const express = require('express');
const {user} = require('../models/Auth');

const router = express.Router();


router.post('/login',async (req, res)=>
{
  
 
   //* Initially checking if we have the user in our DB or not and if not then only er are pushing into DB */

  try {
    const userCheck = await user.findOne({email: req.body.dt.Ot});
    if(userCheck)
    {
      res.status(200).json(
        {
          status: true,
          message: "Login In Success"
        }
      )
    }
    else 
    {
      console.log(req.body);
    const name=req.body.dt.Se;
    
    const email=req.body.dt.Ot;
    const photo=req.body.dt.PJ ;
    const ip = req.socket.remoteAddress;
    


    // To check in postman use this below code and comment above

    // const first=req.body.firstName;
    // const last=req.body.lastName;
    // const email=req.body.email;
    // const photo=req.body.photo;
    // const ip= req.body.ip;

    

    

    const newUser= await new user({ name:name,email:email,photo:photo,ip:ip });


    if(!newUser)
    {
      res.status(200).json(
        {
          status: false,
          message: "User Not Added!!"
        }
      )
    }
    else 
    {
      await newUser.save((err,data)=>{
        if(err)
        {
          console.log(err);
          res.send(err);
  
        }
  
        else{
          console.log(data);
          res.status(200).send(data);
        }
  
      })

    }

    


  }

    
 } catch (error) {
    console.log(error);
    
  }
     
    
})

router.get('/testSample', (req, res)=>
{
  
  res.status(200).json(
    {
      status: true,
      message: "OK"
    }
  )
})


module.exports = router;