const mongoose=require("mongoose");


//Each project will have its issues
const IssueSchema=new mongoose.Schema({
    //id is implicit
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    approvedBy:String,
    manager:{
        type:String,
    },
    assignedTo:{
        type:String,
        //default:"None" : not required cos MONGO
    },
    description:String,
    comments:[String],
    tags:[String],
    status:String,
    deadline:Date,
    isAssigned:{
        type:Boolean,
        default:false
    },
    isApproved:{
        type:Boolean,
        default:false
    },
   
    iproject:{
        type:String,
        required:true
    },
    priority:{
        type:Number
    }
},{timestamps:true, collection:"Issues"})

const IssueModel=mongoose.model("Issue",IssueSchema);

module.exports={IssueModel}