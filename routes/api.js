const router = require("express").Router()
const User = require("../models/userModel")
const auth = require("../middlewares/authenticator")

const { getUser,
    updateUser,
    getFollowers,
    getFollowing,
    followUser,
    unfollowUser,
} = require("../controllers/userController")

const {

} = require("../controllers/postController")
const { route } = require("./auth")
const { upload, storage } = require("../controllers/awsUpload")

router
    .route('/:id')
    .get(auth, getUser)
    .patch(auth, updateUser)
/*     .delete(auth, deleteUser)
    .patch(auth, upload.single('avatar'), updateUser); // updates my user profile
// .patch(auth, upload.single('avatar'), upload.array("product_images"), updateUser) // updates my user profile 
 */


router
    .route('/:id/dashboard')
    .get(auth, getUser)
    .patch(auth, updateUser)
module.exports = router

/* router
    .route('/:id/upload')
    .get(auth, getUser)
    .post(upload) */


