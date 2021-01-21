const router = require("express").Router()
const User = require("../models/userModel")
const auth = require("../middlewares/authenticator")

const { getUser,
    updateUser,
    deleteUser,
    getFollowers,
    getFollowing,
    followUser,
    unfollowUser,
} = require("../controllers/userController")

const {
    createPost
} = require("../controllers/postController")
const { route } = require("./auth")
const { upload, storage } = require("../controllers/awsUpload")

router
    .route('/:id')
    .get(auth, getUser)
    .patch(auth, /* upload.single('avatar'), */ updateUser)
    .delete(auth, deleteUser)

router
    .route('/:id/dashboard')
    .get(auth, getUser,)
    .patch(auth, updateUser, /*  getFollowers,       getFollowing */)

router
    .route('/:id/upload')
    .get(auth, getUser)
    .post(/* upload */)

router
    .route('/:id/edit-post/')
    .get(auth, getUser,)
    .patch(auth, updateUser, /* getFollowers, getFollowing */)

module.exports = router;