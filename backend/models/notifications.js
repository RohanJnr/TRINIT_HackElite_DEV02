const mongoose=require("mongoose");

const NotificationSchema=new mongoose.Schema({
    
    
            isRead:{
                type:Boolean,
                default:false
            },
            title:String,
    
})

const NotifModel=mongoose.model("Notification",NotificationSchema);

module.exports={NotifModel}