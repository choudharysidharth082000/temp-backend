const mongoose = require('mongoose');

const {Schema} = mongoose;

const websiteSchema = new Schema(
    {

        siteName:{
            type:String,
            required:true
        },

        siteUrl:{

            type:String,
            required:true

        },
        consumerKey:{
            type:String,
            required:true

        },

        consumerSecret:{
            type:String,
            required:true

        }
        
       

    },{timestamps: true}
)

const websiteModel = mongoose.model("website", websiteSchema);

exports.websiteModel=websiteModel;



