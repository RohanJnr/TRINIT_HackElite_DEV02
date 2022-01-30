const {useErrorCreate} = require("../errorClass");
const asyncWrap=require("../middleware/asyncHandler");
const { OrgModel } = require("../models/Organisation");
const { ProjectModel } = require("../models/Projects");
const { UserModel } = require("../models/User");

const createProject=asyncWrap(async(req,res)=>{
    const {title,founder,description,orgId}=req.body;
    //add people to org as well as in the post
    const proj=await ProjectModel.create({title, people:{role:"manager",userId:founder},description,orgId})
    if(proj){
        let uobj={role:"manager",orgId}
        let oobj={userId:founder,projectId:proj._id,role:"manager"}
        await UserModel.findByIdAndUpdate(founder,{$push:{posts:uobj}})
        await OrgModel.findByIdAndUpdate(orgId,{$push:{people:oobj}})
        return res.status(200).json({success:true, data:{proj}});
    }


});

const getProject=asyncWrap(async(req,res)=>{
    const {id}=req.params;
    
    const proj=await ProjectModel.findById(id);
    if(proj && !proj.isterminated)
        return res.status(200).json({success:true, proj});

});

const getAllProjects=asyncWrap(async(req,res)=>{
    
    const projects=await ProjectModel.find({isterminated:false});
    if(projects)
        return res.status(200).json({success:true, projects});

});


const updateProject=asyncWrap(async(req,res)=>{
    const {people,description}=req.body;
    const {id}=req.params;

    const proj=await ProjectModel.findByIdAndUpdate(id, {people,description},{new:true})
    if(proj)
        return res.status(200).json({success:true, data:{people:proj.people,description}});

});

const deleteProject=asyncWrap(async(req,res)=>{
    const {id}=req.params;
    const proj=await ProjectModel.findByIdAndUpdate(id, {isterminated:true},{new:true})

    if(proj)
        return res.status(200).json({success:true, data:{isterminated:true}});
});


const getTags=asyncWrap(async(req,res)=>{
    const {id}=req.params;

    const proj=await ProjectModel.findById(id);
    if(proj)
        return res.status(200).json({success:true, data:{tags:proj.tags}});

});
const pushTags=asyncWrap(async(req,res)=>{
    const {id}=req.params;
    const {tags}=req.body;

    const proj=await ProjectModel.findByIdAndUpdate(id,{$push:{
        tags:tags
    }},{new:true});
    if(proj)
        return res.status(201).json({success:true, data:{tags:proj.tags}});
});
const deleteTags=asyncWrap(async(req,res)=>{
    const {id}=req.params;
  

    const proj=await ProjectModel.findByIdAndUpdate(id,{tags:[]},{new:true});
    if(proj)
        return res.status(200).json({success:true, data:{tags:proj.tags}});
});
module.exports={
    createProject,
    updateProject,
    deleteProject,
    getProject,
    getTags,
    pushTags,
    deleteTags,
    getAllProjects
}