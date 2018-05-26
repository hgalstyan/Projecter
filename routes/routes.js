const express = require("express");
const router = new express.Router();

router.get("/", (req, res, next)=>{
    res.render("index");
});

const login = require("./login");
router.use("/login", login);

const profile = require("./profile");
router.use("/profile", profile);

const project = require("./project");
router.use("/project", project);

const logout = require("./logout");
router.use("/logout", logout);

module.exports = router;
