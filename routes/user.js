const router = require("express").Router()
const User = require("../models/userModel")

const auth = require("../middlewares/authenticator")

const { getUser,
    updateUser,
    deleteUser,
    getFollowers,
    getPosts,
    getFollowedUsers,
    followUser,
    unfollowUser,
} = require("../controllers/userController")

const { multerUpload } = require("../middlewares/multerUpload")
const { s3Upload } = require("../middlewares/awsUpload")

router
    .route("/:id")
    .get(auth, getUser)
    .patch(auth, updateUser) 
    .delete(auth, deleteUser)

router
    .route("/:id/posts")
    .get(auth, getPosts)

router
    .route("/:id/upload")
    .post(auth, multerUpload, s3Upload, updateUser)

router
    .route("/:id/followers")
    .get(auth, getFollowers)

router
    .route("/:id/followed")
    .get(auth, getFollowedUsers)

router
    .route("/:id/followUser")
    .patch(auth, followUser)

router
    .route("/:id/unfollowUser")
    .patch(auth, unfollowUser)

router.get("/me", auth, getUser)

module.exports = router;
