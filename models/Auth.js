const mongoose = require('mongoose');

const {Schema} = mongoose;

const users = new Schema(
    {
        firstName: {
            required: true,
            type: String,
            min:3
        },
        lastName: {
            required: true,
            type: String,
            min:3

        },
        email: 
        {
            required: true,
            type: String,
            min: 8
        },
        photo:{

            required:true,
            type:String

        },
        ip:{
            required:true,
            type:String
        },
        isActive: 
        {
            type: Boolean,
            default: true
        }
       
       

    },{timestamps: true}
)

const user = mongoose.model("User", users);

exports.user = user;



