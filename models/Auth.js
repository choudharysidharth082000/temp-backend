const mongoose = require('mongoose');

const {Schema} = mongoose;

const users = new Schema(
    {
        name: {
            required: false,
            type: String,
            min:3
        },

        email: 
        {
            required: false,
            type: String,
            min: 8
        },

        photo:{

            required:false,
            type:String

        },
        ip:{
            required:false,
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



