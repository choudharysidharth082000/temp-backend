const express = require('express');
const {user} = require('../models/Auth');

const router = express.Router();


router.post('/login', (req, res)=>
{
    const first=req.body.it.HU;
    const last=req.body.it.YS;
    const email=req.body.it.Tt;
    const photo=req.body.it.kK ;
    // const ip= req.socket.remoteAddress;
    const ip="0:0:1";


    // To check in postman use this below code and comment above

    // const first=req.body.firstName;
    // const last=req.body.lastName;
    // const email=req.body.email;
    // const photo=req.body.photo;
    // const ip= req.body.ip;

    

    

    var newuser=new user({ firstName:first,lastName:last,email:email,photo:photo,ip:ip });

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