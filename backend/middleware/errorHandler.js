const {ErrorCreate}=require("../errorClass");


const reportError = (err,req,res,next)=>{
    if(err instanceof ErrorCreate){
        
        return res.status(err.statusCode).json({err:true, msg:err.message})
    }
    return res.status(500).json({err:true, msg:`something went wrong..try again later`,error:{...err}})
    
}

module.exports = reportError;