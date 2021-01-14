const mongoose = require("mongoose")

const mediaSchema = new mongoose.Schema({
    img: {
        type: String
    },
    url: {
        type: String
    }
})

const contentSchema = new mongoose.Schema({
    // temporary sketch
    userID: {
        type: String,
        required: true,
    },
    // isPinned = pinned links
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
    likes: {
        type: Number,
        default: 0
    },
    shares: {
        type: Number,
        default: 0
    },
    expiringDate: {
        type: Date,
        default: null
    },
    media: {
        type: mediaSchema,
        default: {}
    }
})

module.exports = mongoose.model("content", userSchema)