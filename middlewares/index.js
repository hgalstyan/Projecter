function loggedOut(req, res, next){
    if(req.session && req.session.userId){
        res.redirect("/");
    }
    next();
}



module.exports.loggedOut = loggedOut;