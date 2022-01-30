const { assignUser, getUser } = require("../controllers/User");
const { useErrorCreate } = require("../errorClass");
const asyncWrap = require("../middleware/asyncHandler");
const { UserModel } = require("../models/User");
const { verifyToken,verifyTokenWithAdmin } = require("./Auth");

const router=require("express").Router();


//edit post: add, remove, update
//tasks: CRUD

//dashboard details:signed IN
router.get("/:id",verifyToken,getUser);


//assigning post to a user
router.post("/assign/:id",verifyTokenWithAdmin,assignUser);



    
module.exports=router;