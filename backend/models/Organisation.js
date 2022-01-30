const mongoose=require("mongoose");

const OrgSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:String,
    founder:{
        type:String,
        required:true
    },
    projects:[String],
    people:[{
        userId:String,
        projectId:String,
        role:String
    }]
})

const OrgModel=mongoose.model("Org",OrgSchema);
module.exports={OrgModel}