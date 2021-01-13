const { number } = require("joi")
const mongoose = require("mongoose")

const mediaSchema = new mongoose.Schema({
    img: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
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
        required: true
    },
    updateDate: {
        type: Date,
        default: "",
        required: false
    },
    url: {
        type: String,
        required: false
    },
    likes: {
        type: Number,
        default: 0,
        required: false
    },
    shares: {
        type: Number,
        default: 0,
        required: false
    },
    expiringDate: {
        type: Date,
        default: null,
        required: false
    },
    media: {
        type: mediaSchema,
        required: false,
        default: {}
    }
})

module.exports = mongoose.model("content", userSchema)