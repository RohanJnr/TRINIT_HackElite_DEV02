const asyncWrap=require("../middleware/asyncHandler");
const {useErrorCreate} =require("../middleware/errorHandler");
const { OrgModel } = require("../models/Organisation");
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
    let {id}=req.user;
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



const getUserOrgs=asyncWrap(async(req,res)=>{
    let {id}=req.user;
    let user=await UserModel.findById(id);
    let orgs={}
    
    user.posts.forEach((item)=>{
         if(item.orgId){
                orgs={...orgs,[`${item.orgId}`]:{orgId:item.orgId,role:item.role}}
         }
    })
    

    const ids=Object.keys(orgs);
    let sub=await OrgModel.find({_id:{$in:ids}});
    let namesId=sub.map((item)=>({oname:item.name,id:item._id,role:orgs[item._id].role}))
    
    
    
    if(namesId){
        return res.status(200).json({success:true, data:{namesId}});
    }
    next(useErrorCreate("Interruption",402));
})

module.exports={
    assignUser,
    getUser,
    getUserOrgs
}