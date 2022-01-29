const mongoose=require("mongoose");


//Each project will have its issues
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    password:String,
    photoURL:String,
    //manager-emp-end
   utype:{
         type:String,
        default:"end"
   },
   //usr for stats
   
   department:{
       type:String,
       required:true
   },
   task:{
       type:[String]
   }

},{timestamps:true, collection:"Users"})

//timestamps required for stats
const UserModel=mongoose.model("Users",UserSchema);

module.exports={UserModel}