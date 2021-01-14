const router = require("express").Router()

const User = require("../models/userModel")

const {
    getUser,
    getFollowers, 
    getFollowing, 
    followUser, 
    unfollowUser, 
    updateUser
} = require("../controllers/userController")

module.exports = router
