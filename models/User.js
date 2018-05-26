const mongoose = require("mongoose");
const bcrypt =  require("bcrypt");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true, trim: true},
    password: {type: String, required: true},
    rating: Number,
    about: String,
    projectsActive:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    projectsWas:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }],
    review: String
});


UserSchema.statics.authenticate = function(email, password, callback){
    User.findOne({email: email})
        .exec(function(error, user){
            if(error) return callback(error);
            if(!user){
                const err = new Error("User not found!");
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, (error, result)=>{
                if(result) return callback(null, user);
                else return callback(error)
            })
        });
};

UserSchema.pre("save", function(next){
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash)=>{
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;