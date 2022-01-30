const router=require("express").Router();

const{
    createProject,
    updateProject,
    deleteProject,
    getProject,
    getTags,
    pushTags,
    deleteTags,
    getAllProjects
}= require("../controllers/project");
const { verifyToken, verifyTokenWithAdmin } = require("./Auth");


router.route("/")
    .post([verifyTokenWithAdmin,createProject])
    .get(getAllProjects)


router.route("/:id")
    .get([verifyToken,getProject])
    .patch([verifyTokenWithAdmin,updateProject])
    .delete([verifyTokenWithAdmin,deleteProject]);

router.route("/:id/tags")
    .get(getTags)
    .patch(pushTags)
    .delete(deleteTags)


module.exports=router;



//create Issue
