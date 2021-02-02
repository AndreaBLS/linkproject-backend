const router = require("express").Router()
const User = require("../models/userModel")
const { userRegister, userLogin, userLogout } = require("../controllers/userController")
const auth = require("../middlewares/authenticator")


//auth
router.post("/signup", userRegister)
router.post("/login", userLogin)
router.post("/logout", userLogout)

module.exports = router
