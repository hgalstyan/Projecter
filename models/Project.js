const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    needs:[{
        name: String,
        description: String,
        status: Boolean,
        quantity: Number
    }],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    team:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    }],
    status: String,
    finishTime: Date
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;