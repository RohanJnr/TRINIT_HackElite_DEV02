
const router=require("express").Router();

const {
    createIssue,
    getIssue,
    getIssueByTags,
    deleteIssue,
 
    updateIssue
}= require("../controllers/issue");

router.route("/")
    .post(createIssue)
    .get(getIssueByTags)

router.route("/:id")
    .get(getIssue)
    .delete(deleteIssue)
    .patch(updateIssue)


module.exports=router;



//create Issue
