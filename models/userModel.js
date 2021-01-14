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
        default: false,
    },
    followers: {
        type: Number,
        default: 0
    },
    following: {
        type: Number,
        default: 0
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    editDate: {
        type: Date
    }
})

module.exports = mongoose.model("User", userSchema)