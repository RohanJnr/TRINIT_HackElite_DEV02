const mongoose=require("mongoose");


//Each project will have its issues
const UserSchema=new mongoose.Schema({
    
    username:{
        type:String,
        required:true,
        unique:true
    },secondname:{
        type:String,
    },firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    photoURL:String,
    //manager-emp-end
  

   posts:{
        type:[{
            projectId:String,
            role:String,
            orgId:String
        }]   
   },
   issues:{
       type:[String]
   },
   notifications:[String]//id
   

},{timestamps:true, collection:"Users"})

//timestamps required for stats
const UserModel=mongoose.model("Users",UserSchema);

module.exports={UserModel}