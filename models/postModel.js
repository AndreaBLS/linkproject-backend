const mongoose = require("mongoose")

const contentSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    isPinned: {
        type: Boolean
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
    text: {
        type: String
    },
    description: {
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
    image: {
        type: String
    },
    isHidden: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("content", contentSchema)