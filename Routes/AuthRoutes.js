const express = require('express');
const {user} = require('../models/Auth');

const router = express.Router();


router.post('/login', (req, res)=>
{
    const name=req.body.ax.Se;
    
    const email=req.body.ax.Ot;
    const photo=req.body.ax.PJ ;
    const ip = req.socket.remoteAddress;
    


    // To check in postman use this below code and comment above

    // const first=req.body.firstName;
    // const last=req.body.lastName;
    // const email=req.body.email;
    // const photo=req.body.photo;
    // const ip= req.body.ip;

    

    

    var newuser=new user({ name:name,email:email,photo:photo,ip:ip });

    newuser.save((err,data)=>{
      if(err)
      {
        console.log(err);
        res.send(err);

      }

      else{
        console.log(data);
        res.send(data);
      }

    })

    
})


module.exports = router;