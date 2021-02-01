const mongoose = require("mongoose")

const contentSchema = new mongoose.Schema({
    // temporary sketch
    userID: {
        type: String,
        required: true,
    },
    isPinned: {
        type: Boolean,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now,
    },
    editDate: {
        type: Date,
        default: null
    },
    url: {
        type: String
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    shares: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    expiringDate: {
        type: Date,
        default: null
    },
    img: {
        type: String
    },
    isHidden: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("content", userSchema)