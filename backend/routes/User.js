const { assignUser, getUser, getUserOrgs } = require("../controllers/User");
const { useErrorCreate } = require("../errorClass");
const asyncWrap = require("../middleware/asyncHandler");
const { UserModel } = require("../models/User");
const { verifyToken,verifyTokenWithAdmin } = require("./Auth");

const router=require("express").Router();


//edit post: add, remove, update
//tasks: CRUD

//dashboard details:signed IN
router.get("/",verifyToken,getUser);
router.get("/orgs",verifyToken,getUserOrgs);

//assigning post to a user
router.post("/assign/:id",verifyTokenWithAdmin,assignUser);



    
module.exports=router;