const express = require('express');

const router = express.Router();
const upload = require('../multer Configurations/multer');
const validateProfile = require('../validators/profileValidator')
const {userProfile} = require('../models/userProfile')
const {user} = require('../models/Auth');
const fs = require('fs');




router.post('/addUser', async(req, res)=>
{
    console.log(req.body);
    const {name, mobileNumber, facebookID, instagramID, whatsappNumber} = req.body;
    const data = {name, mobileNumber, facebookID, instagramID, whatsappNumber};
    

    const resultFromJoi = validateProfile('name mobileNumber facebookID instagramID whatsappNumber', data);
    if(!resultFromJoi)
    {
        res.status(200).json(
            {
                status: false,
                message: "Invalid Credential Details"
            }
        )
    }
    else 
    {
        try {
            const user = await new userProfile({
                name: name,
                mobileNumber: mobileNumber ,
                whatsappNumber: whatsappNumber,
                facebookID: facebookID,
                instagramID: instagramID,
    
    
            })


            if(!user)
            {
                res.status(500).json(
                    {
                        status: false,
                        message: "User Not Created"
                    }
                )
            }
            else 
            {
                await user.save();
                res.status(200).json(
                    {
                        status: true,
                        message: "User is created!"
                    }
                )
                
            }
            console.log(user)


            
            
        } catch (error) {
            console.log(error);
        }
        
    }
    console.log(req.body);


    
})


router.post('/addProfile/:userID',upload.fields([
    {
        name: 'profileImage', maxCount: 1
    }
]), async(req, res)=>
{
    console.log(req.files);
    const {name, mobileNumber, facebookID, instagramID, whatsappNumber} = req.body;
    const data = {name, mobileNumber, facebookID, instagramID, whatsappNumber};
    

    const resultFromJoi = validateProfile('name mobileNumber facebookID instagramID whatsappNumber', data);
    if(!resultFromJoi)
    {
        res.status(200).json(
            {
                status: false,
                message: "Invalid Credential Details"
            }
        )
    }
    else 
    {
        if(!req.files)
    {
        res.status(200).json(
            {
                status: false,
                messgage: "Profile Image is not given"
            }
        )
    }
    else 
    {
        try {

            const findUser = await user.findOne({_id: req.params.userID});
            if(!findUser)
            {
                res.status(200).json(
                    {
                        status: false,
                        message: "User Not Found"
                    }
                )
                try {

                   const deleteFile = await fs.unlinkSync(req.files.profileImage[0].path);
                   console.log(deleteFile);
                    
                    
                } catch (error) {
                    
                    console.log(error);
                }
            }
            else 
            {
                const uploadProfile = await new userProfile(
                    {
                        userID: req.params.userID,
                        name: name,
                        mobileNumber: mobileNumber ,
                        whatsappNumber: whatsappNumber,
                        facebookID: facebookID,
                        instagramID: instagramID,
                        profilePhoto: req.files.profileImage[0].path

                    }
                )
                if(!uploadProfile)
                {
                    res.status(200).json(
                        {
                            status: false,
                            message: "User Not Created"
                        }
                    )
                }
                else 
                {
                    res.status(200).json(
                        {
                            status: true,
                            message: "User Profile is Created",
                            data: uploadProfile
                        }
                    )
                }
            }
            
            
        } catch (error) {
            
            console.log(error);
        }

    }

    }

    
})


router.get('/getAllProfiles', async(req, res)=>
{
    try {
        const users = await user.find();
        if(!user)
        {
            res.status(200).json(
                {
                    status: false,
                    message: "User Not Found"
                }
            )
        }
        else 
        {
            res.status(200).json(
                {
                    status: true,
                    users: users
                }
            )
        }
        
    } catch (error) {
        
        console.log(error);
    }
})


router.get('/profileGet/:userID', async(req, res)=>
{
    try {
        const user = await userProfile.findOne({_id: req.params.userID});
        if(!user)
        {
            res.status(200).json(
                {
                    status: false,
                    message: "User not found"
                }
            )
        }
        else 
        {
            res.status(200).json(
                {
                    status: true,
                    user: user
                }
            )
        }
        
    } catch (error) {
        
        console.log(error);
    }
})

// router.delete('/deleteProfile/:userID', async(req, res)=>
// {
//     try {
//         const user = await userProfile.findOne({_id: req.params.userID});
//         if(!user)
//         {
//             res.status(200).json(
//                 {
//                     status: false,
//                     message: "User not found"
//                 }
//             )
//         }
//         else 
//         {
//             const deleteUser = await userProfile.findOneAndDelete({_id: req.params.userID});
//             if(!deleteUser)
//             {
//                 res.status(200).json(
//                     {
//                         status: false,
//                         message : "User is not deleted"
//                     }
//                 )
//             }
//             else 
//             {
//                 res.status(200).json(
//                     {
//                         status: true,
//                         message: "User is deleted Successfuly",
//                         id: user._id
//                     }
//                 )
//             }
//         }
        
        
//     } catch (error) {

//         console.log(error);
        
//            status: true,
//                         message: "User is deleted Successfuly",
//                         id: user._id
//                     }
//                 )
//             }
//         }
        
        
//     } catch (error) {

//         console.log(error);
        
//             status: true,
//                         message: "User is deleted Successfuly",
//                         id: user._id
//                     }
//                 )
//             }
//         }
        
        
//     } catch (error) {

//         console.log(error);
        
//     }
// })


module.exports = router
