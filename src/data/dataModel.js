const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    rbUserId: Number,
    name: String,
    username: String,
    email: String,
    password: String,
    status: Boolean
});
// Create the User model
const User = mongoose.models.users || mongoose.model('users', userSchema);


const registerUserSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    verificationToken: String,
    isVerified: Boolean
})

// Register Users!
const registerUser = mongoose.models.registerUsers || mongoose.model("registerUsers", registerUserSchema);



const projectSchema = new mongoose.Schema({
    rbProjectId: Number,
    name: String
});
// Create the Projects model
const Project = mongoose.models.project || mongoose.model("project", projectSchema);

const taskSchema = new mongoose.Schema({
    rbTaskId: Number,
    rbProjectId: Number,
    name: String,
    updatedAt: Number
});
// Create the Tasks model
const Task = mongoose.models.tasks || mongoose.model('tasks', taskSchema);

const loggingSchema = new mongoose.Schema({
    rbCommentId: Number,
    rbUserId: Number,
    rbTaskId: Number,
    minutes: Number,
    timeTrackingOn: String,
    createdAt: Number
});

// Create the Loggings model
const Logging = mongoose.models.loggings || mongoose.model('loggings', loggingSchema);


// export { User, Project, Task, Logging };
module.exports = { User, Project, Task, Logging, registerUser };
