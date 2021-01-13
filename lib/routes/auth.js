const router = require("express").Router()
const User = require("../models/userModel")
const {userRegister, userLogin} = require("../controllers/UserController")

router.post("/register", userRegister)
router.post("/login",userLogin)

module.exports = router
