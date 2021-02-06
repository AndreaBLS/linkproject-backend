const router = require("express").Router()
const Post = require("../models/postModel")
const auth = require("../middlewares/authenticator")
const { multerUpload } = require("../middlewares/multerUpload")
const { s3Upload } = require("../middlewares/awsUpload")

const {
    createPost,
    getPost,
    editPost,
    toggleLike,
    sharePost,
    deletePost
} = require("../controllers/postController")
const { updateUser } = require("../controllers/userController")

router
    .route('/:id')
    .get(auth, getPost)
    .patch(auth, editPost)
    .delete(auth, deletePost)

router
    .route("/upload")
    .post( multerUpload, s3Upload)

router.route("/").post(auth, createPost)

router.route("/:id/toggleLike")
    .patch(auth, toggleLike)

router
    .route('/:id/sharePost')
    .post(auth, sharePost)

module.exports = router;