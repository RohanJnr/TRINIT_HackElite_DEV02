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
    manager:{
        type:String,
        required:true
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
    //to determine to which manager, the notification is to be sent
    idepartment:{
        type:String,
        required:true
    },
    iproject:{
        type:String,
        required:true
    }
},{timestamps:true, collection:"Issues"})

const IssueModel=mongoose.model("Issue",IssueSchema);

module.exports={IssueModel}