const router = require("express").Router();
const Profile = require("../models/model").Profile;
const Project = require("../models/model").Project;

//get route for /projectId
router.get("/:projectId", (req, res, next)=>{
    //res.render();
});



module.exports = router;