const router=require("express").Router();

const{
    createOrg,
    updateOrg,
    getOrg,
    joinOrg,
    getAllOrgs
 }= require("../controllers/Org");
const { verifyTokenWithAdmin, verifyToken } = require("./Auth");

router.route("/")
    .post([verifyToken,createOrg])
    .get(getAllOrgs)

//get all orgs


router.route("/:id")
    .get([verifyToken,getOrg])
    .patch([verifyTokenWithAdmin,updateOrg])

router.post("/join/:id",verifyToken,joinOrg);

module.exports=router;



//create Issue
