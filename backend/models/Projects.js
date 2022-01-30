const mongoose=require("mongoose")


const ProjectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    orgId:String,
    issues:[String],
    people:[{
            role:String,
            userId:String
     }]   
    ,
    isterminated:{
        type:Boolean,
        default:false
    },
    notifications:[String],
    tags:{
        type:[String],
        default:["easy","bug"]
    }
    
})

const ProjectModel=mongoose.model("Project",ProjectSchema);

module.exports={ProjectModel}