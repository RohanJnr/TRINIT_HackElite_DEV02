const mongoose=require("mongoose")


const ProjectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    issues:[String],
    department:[String]
    
})

const ProjectModel=mongoose.model("Project",ProjectSchema);

module.exports={ProjectModel}