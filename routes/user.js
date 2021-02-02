const router = require("express").Router()
const User = require("../models/userModel")

const auth = require("../middlewares/authenticator")

const { getUser,
    updateUser,
    deleteUser,
    getFollowers,
    getPosts,
    getFollowing,
    followUser,
    unfollowUser,
} = require("../controllers/userController")

router
    .route('/:id')
    .get(auth, getUser)
    .patch(auth, /* upload.single('avatar'), */ updateUser)
    .delete(auth, deleteUser)

router
    .route('/:id/dashboard')
    .get(auth, getUser)
    .patch(auth, updateUser,)

router
    .route("/:id/posts")
    .get(auth, getPosts)

router
    .route('/:id/upload')
    .get(auth, getUser)
    .post(/* upload */)


module.exports = router;