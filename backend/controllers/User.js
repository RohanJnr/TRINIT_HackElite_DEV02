const asyncWrap=require("../middleware/asyncHandler");
const {useErrorCreate} =require("../middleware/errorHandler");
const { UserModel } = require("../models/User");

const assignUser=async(req,res)=>{
    const {projectId,role,userId,issueId}=req.body;
    const {type}=req.params;

    if(type==="role"){
        let obj={projectId,role};
        let user=await UserModel.findByIdAndUpdate(userId,{$push:{posts:obj}})
        if(user){
        //    return res.status(200).json({success:true, data:{issue}})
            
            return res.status(201).json({success:true,msg:"Updated"});

        }
        //success
    }else if(type==="issue"){
        let user=UserModel.findByIdAndUpdate(id,{$push:{issueId}})
        
        if(user){
            return res.status(201).json({success:true,msg:"Updated"});
        }
    }else{  
        next(useErrorCreate("Invalid Op",402));

    }

}


const getUser=asyncWrap(async(req,res)=>{
    let {id}=req.params;
    let user=await UserModel.findById(id);
    let projects={}
    let orgs={}
    user.posts.forEach((item)=>{
        if(item.projectId)
            projects={...projects,[`${item.projectId}`]:{projectId:item.projectId,role:item.role}}
        else if(item.orgId)
            orgs={...orgs,[`${item.orgId}`]:{orgId:item.orgId,role:item.role}}
    })
    let {password,posts,...others}=user._doc;

    if(user)
        return res.status(200).json({success:true, data:{...others,projects,orgs}});
    next(useErrorCreate("User not found",404));
})

module.exports={
    assignUser,
    getUser
}