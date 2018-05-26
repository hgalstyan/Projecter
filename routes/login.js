const router = require("express").Router();
const User = require("../models/model").User;
const mid = require("../middlewares");


router.get("/",mid.loggedOut,(req, res, next)=>{
    res.render("login");
});

router.post("/:action",(req, res, next)=>{
    console.log(req.params);
    if(req.params.action === "register"){
        if(req.body.firstname && req.body.lastname && req.body.regEmail && req.body.regPassword){
            const userData = {
                name: `${req.body.firstname} ${req.body.lastname}`,
                email: req.body.regEmail,
                password: req.body.regPassword
            }
            User.create(userData, (err, user)=>{
                if(err) return next(err);
                else {
                    req.session.userId = user._id;
                    res.redirect("/");
                }
            });
        }
        else{
            const err = new Error("All fields required");
            err.status = 400;
            return next(err);
        }
    }
    if(req.params.action === "signin"){
        if(req.body.logEmail && req.body.logPassword){
            User.authenticate(req.body.logEmail , req.body.logPassword, function(err, user){
                console.log(user._id);
                if (err || !user){
                    const err = new Error("Wrong email or password.");
                    err.status = 401;
                    return next(err);
                }
                else{
                    req.session.userId = user._id;
                    res.redirect(`/`)
                }
            });
        }
        else{
            const err = new Error("Email and password required");
            err.status = 400;
            return next(err);
        }
    }
});

module.exports = router;