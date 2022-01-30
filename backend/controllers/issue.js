const {useErrorCreate} = require("../errorClass");
const asyncWrap=require("../middleware/asyncHandler");
const { IssueModel } = require("../models/Issue");
const { NotifModel } = require("../models/notifications");
const { ProjectModel } = require("../models/Projects");
const { UserModel } = require("../models/User");

const createIssue=asyncWrap(async(req,res,next)=>{
    const {title,description, iproject,author}=req.body;
    if(!title || !description || !iproject || !author)
        return next(useErrorCreate("Insufficient info",400))
    let proj=await ProjectModel.findById(iproject);
    const obj={title,description,iproject,author}
    const issue=await IssueModel.create(obj);
    
    if(issue){
        await ProjectModel.findByIdAndUpdate(iproject,{issues:[...proj.issues, issue._id]})
        notifyProjectWorker(iproject,issue._id);
        return res.status(201).json({success:true, data:{id:issue._id,title,author}})
    }
    
})


const getIssue=asyncWrap(async(req,res)=>{
    const {id}=req.params;

    const issue=await IssueModel.findById(id);

    return res.status(200).json({success:true, data:{issue}})
    
})

const deleteIssue=asyncWrap(async(req,res)=>{
    const {id}=req.params;
    const {status}=req.body;
    const issue=await IssueModel.findByIdAndUpdate(id,{
        status
    })

    if(issue)
        return res.status(200).json({success:true, data:{status}})

})

const createNotification=(content)=>{
    return NotifModel.create({title:content});
    
}
const notifyManagersWorker=async(projectId,issueId)=>{
    let proj=await ProjectModel.find({_id:projectId})
    let managers=proj.people.filter((item)=>item.role==="manager")
    let ids=managers.map((item)=>item.userId);

    ids.forEach(async(item)=>{
        let res=await createNotification(`${issueId} has been approved, please assign`);
        await UserModel.findOneAndUpdate(item,{$push:{notifications:res._id}})
    })
   
}

const notifyProjectWorker=async(projectId,issueId)=>{
    const notifId=await createNotification(`${issueId} has been raised, please scrutiny`);
    let proj=await ProjectModel.findByIdAndUpdate(projectId,{$push:{notifications:notifId}})
}

const getIssueByTags=asyncWrap(async(req,res)=>{
    //priority,status,tags
    const quer=req.query;
    const {tags:tagsS,projectName,...filter}=quer;
    console.log(filter);

    let issues;
    if(tagsS && filter){
        let tags=tagsS.split(" ");
        issues=await IssueModel.find({filter,tags:{$in:tags}})
    }else if(filter && !tagsS){
        issues=await IssueModel.find({filter});
    }

    if(tagsS){
        let tags=tagsS.split(" ");
        let issue1=await IssueModel.find({tags:{$in:tags}})
        issues=[...issue1,...issues]
    }

    if(projectName){
        let proj=await ProjectModel.findOne({name:projectName});
        let issue1=await IssueModel.find({iproject:proj._id});
        issues=[...issue1,...issues]
    }
   
    if(filter){
        let issue1=await IssueModel.find({filter});
        issues=[...issue1,...issues]
    }

    let ids=issues.map((v)=>v._id);
    ids=new Set(ids);
    let pods={}
    ids.forEach(v=>{
        let issue=issues.find((item)=>item._id===v);
        pods={...pods,[`${v}`]:issue}
    })
    
    let keys=Object.values(pods);

    if(issues)
        return res.status(200).json({success:true, data:[...keys]})


})

//add comments


const updateIssue=asyncWrap(async(req,res)=>{
    const {type}=req.query;
    const {id}=req.params;
    if(type==="assign"){

        const {manager, assignedTo, tags, status, deadline,priority}=req.body;
        const {id}=req.params;
    
        let obj={manager, assignedTo, tags, status, deadline,priority}
        const issue=await IssueModel.findByIdAndUpdate(id,{...obj,isAssigned:true});
    
        //notifications
    
        if(!issue)
            return next(useErrorCreate("Insufficient info",404))
        return res.status(200).json({success:true, data:{id:issue._id,isAssigned:true}})
    
        
    }else if(type==="approve"){
        const {tags,usrId}=req.body;
    
        //if issue already approved:
        let check=await IssueModel.findOne({_id:id,isApproved:true});
        if(check){
            let issue=await IssueModel.findByIdAndUpdate(id,{$push:{tags:tags}})
            return res.status(202).json({success:true, msg:"Already Approved, Tag updated",data:{issue}})
        }

        
        const issue=await IssueModel.findOneAndUpdate({_id:id,isApproved:false},{
            isApproved:true,
            tags:tags,
            approvedBy:usrId
        },{new:true})
        
        notifyManagersWorker(issue.iproject,issue._id);
        
        if(!issue)
            return next(useErrorCreate("Insufficient info",404))
    
        return res.status(200).json({success:true, data:{id:issue._id,isApproved:true}})
    }else if(type==="state"){
        const {status,deadline,priority}=req.body;
        const {id}=req.params;
    
        const issue=await IssueModel.findByIdAndUpdate(id,{
            status,
            deadline,
            priority
        })
    
        if(!issue)
            return next(useErrorCreate("Insufficient info",404))
        return res.status(200).json({success:true, data:{id:issue._id}})
    }else{
        next(useErrorCreate("Bad Query",400));
    }
})

module.exports={
    createIssue,
    getIssue,
    getIssueByTags,
    deleteIssue,
    updateIssue
}