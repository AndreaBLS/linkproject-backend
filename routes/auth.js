const router = require("express").Router()
const User = require("../models/userModel")
const { userRegister, userLogin, userLogout, } = require("../controllers/userController")


//auth
router.post("/register", userRegister)
router.post("/login", userLogin)
router.post("/logout", userLogout)


router
/*   .route('/:id')
  .get(auth, getUser)
  .delete(auth, deleteUser)
  .patch(auth, upload.single('avatar'), updateUser); // updates my user profile
// .patch(auth, upload.single('avatar'), upload.array("product_images"), updateUser) // updates my user profile */


module.exports = router
