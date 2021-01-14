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

const {

} = require("../controllers/postController")
const { route } = require("./auth")

router
route("/")
    .get((req, res) => {
        console.log(req.user._id)
    })
    .post

module.exports = router
