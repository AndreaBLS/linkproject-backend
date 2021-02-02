const router = require("express").Router()
const Post = require("../models/postModel")
const auth = require("../middlewares/authenticator")
const { upload, storage } = require("../controllers/awsUpload")


const {
    createPost,
    getPost,
    editPost,
    toggleLike,
    share,
    deletePost
} = require("../controllers/postController")

router
    .route('/:id')
    .get(auth, getPost)
    .post(auth, createPost)
    .patch(auth, editPost)
    .delete(auth, deletePost)

module.exports = router;