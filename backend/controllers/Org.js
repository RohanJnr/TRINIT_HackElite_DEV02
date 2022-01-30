const {useErrorCreate} = require("../errorClass");
const asyncWrap=require("../middleware/asyncHandler");
const { OrgModel } = require("../models/Organisation");
const { UserModel } = require("../models/User");

const createOrg=asyncWrap(async(req,res)=>{
    let {name,description,founder}=req.body;
    const org=await OrgModel.create({name,description,founder})
    
    if(org){    
        let obj={role:"manager",orgId:org._id}
        await UserModel.findByIdAndUpdate(founder,{$push:{posts:obj}})
        return res.status(200).json({success:true, data:{org}});
    }


});

const joinOrg=asyncWrap(async(req,res)=>{
    let {id}=req.params;
    let {userId,role}=req.body;
    let oobj={role,userId}
    let uboj={role,orgId:id}

    const org=await OrgModel.findByIdAndUpdate(id,{$push:{people:oobj}},{new:true});
    //update UserModel
    let usr=await UserModel.findByIdAndUpdate(userId,{$push:{posts:uboj}})
    if(org && usr)
    return res.status(200).json({success:true, msg:"Joined Successfully"});




})


const getAllOrgs=asyncWrap(async(req,res)=>{

    const orgs=await OrgModel.find();
    if(orgs)
        return res.status(200).json({success:true, data:{orgs}});

});


const getOrg=asyncWrap(async(req,res)=>{
    const {id}=req.params;

    const org=await OrgModel.findById(id);
    if(org)
        return res.status(200).json({success:true, data:{org}});

});

const updateOrg=asyncWrap(async(req,res)=>{
    const {people,projects,description}=req.body;
    const {id}=req.params;
    let org;
    if(people){

        org=await OrgModel.findByIdAndUpdate(id, {$push:{people}},{new:true})
    }
    if(projects){
        org=await OrgModel.findByIdAndUpdate(id, {$push:{projects}},{new:true})
    }
    if(description){
        org=await OrgModel.findByIdAndUpdate(id, {description},{new:true})
    }
    if(org)
        return res.status(200).json({success:true, data:{people:org.people, projects:org.projects}});

});

module.exports={
   createOrg,
   updateOrg,
   getOrg,
   joinOrg,
   getAllOrgs
}