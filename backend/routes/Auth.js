const bcryptjs = require("bcryptjs");
const asyncWrap = require("../middleware/asyncHandler");
const { UserModel } = require("../models/User");
const jwt=require("jsonwebtoken");
const router=require("express").Router();
const {useErrorCreate} =require("../errorClass")

router.post("/login",asyncWrap(async(req,res,next)=>{
    const {email,password:plainText}=req.body;
    
    if(!email || !plainText)
    return next(useErrorCreate("Insufficient info",400))

    let user=await UserModel.findOne({email});
    if(!user || !bcryptjs.compareSync(plainText,user.password)){
        return next(useErrorCreate("Invalid Info",404))
    }
    //projectID:role
    let roles={}
    user.posts.forEach((item)=>{
        if(item.projectId)
            roles={...roles,[`${item.projectId}`]:item.role==="manager"?true:false}
        else if(item.orgId)
            roles={...roles,[`${item.orgId}`]:item.role==="manager"?true:false}
    })

    let payload={id:user._id,...roles};
    
    let token=jwt.sign(payload,process.env.JSECRET,{expiresIn:"3d"});
    let {password,...others}=user._doc;
    return res.status(200).json({success:true, data:{...others,token}});

}));

router.post("/register",asyncWrap(async(req,res,next)=>{
    const {firstname,secondname,username,email,password:plainText,photoURL}=req.body;

    if(!firstname|| !username || !email || !plainText)
    return next(useErrorCreate("Insufficient info",400))
    console.log(process.env.SALT)
    const password=bcryptjs.hashSync(plainText,parseInt(process.env.SALT));

    let user=await UserModel.create({firstname,secondname,username,email,password,photoURL});
    if(user){
        //return jwt token
        let payload={id:user._id,posts:user.posts};
        let {password,...others}=user._doc;
        let token=jwt.sign(payload,process.env.JSECRET,{expiresIn:"3d"});
        return res.status(200).json({success:true, data:{user:others,token}});
    }

}))


const verifyToken=(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.status(402).json({error:true, msg:"Please login"});
        
    }
    let tokenstr=token.split(" ")[1];
    let user=jwt.verify(tokenstr,process.env.JSECRET);
    if(!user){
        return res.status(402).json({error:true, msg:"Please login"});
    }
    req.user=user;
    next();
}

const verifyTokenWithAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.body.projectId && req.user[req.body.projectId] || req.params.id && req.user[req.params.id]){
            next()
        }else if(req.body.orgId && req.user[req.body.orgId] | req.params.id && req.user[req.params.id]){
            next()
        }
        else{
            next(useErrorCreate("No auth",403))
        }
    })
}

module.exports={router,verifyToken,verifyTokenWithAdmin};