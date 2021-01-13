const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    displayName: {
        type: String,
        required: true,
        min: 5,
        max: 15
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
    updateDate: {
        type: Date,
        default: null 
    }
})

module.exports = mongoose.model("User", userSchema)