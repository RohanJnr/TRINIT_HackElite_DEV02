const mongoose=require("mongoose")


const CommentSchema=new mongoose.Schema({
    issueId:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    images:[String]
})

//to-do: what if u have multiple images at different positions
const CommentModel=mongoose.model("Comment",CommentSchema);

module.exports={CommentModel}