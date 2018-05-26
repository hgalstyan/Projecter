const router = require("express").Router();
const Profile = require("../models/model").Profile;
const Project = require("../models/model").Project;

//get route for /profileId
router.get("/:profileId", (req, res, next)=>{
    res.render("profile");
});


module.exports = router;