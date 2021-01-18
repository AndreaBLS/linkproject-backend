const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String
/*         required: true */
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
    },
    birthday: {
        type: Date,
    },
    avatar: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    followers: {
        type: Number,
        default: 0
    },
    followedUsers: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    role: {
        type: String,
        enum: ['Admin', 'User'],
        required: false,
        default: 'User',
    },
})

module.exports = mongoose.model("User", userSchema)