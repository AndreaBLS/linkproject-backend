const router = require("express").Router()
const Post = require("../models/postModel")
const auth = require("../middlewares/authenticator")
const { upload, storage } = require("../middlewares/awsUpload")


const {
    createPost,
    getPost,
    editPost,
    toggleLike,
    sharePost,
    deletePost
} = require("../controllers/postController")

router
    .route('/:id')
    .get(auth, getPost)
    .post(auth, createPost)
    .patch(auth, editPost)
    .delete(auth, deletePost)

 router
    .route('/:id/sharePost')
    .post(auth, sharePost)

 /*    
    .patch(auth, toggleLike)  */


module.exports = router;