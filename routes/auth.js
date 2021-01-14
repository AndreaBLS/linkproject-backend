const router = require("express").Router()
const User = require("../models/userModel")
const { userRegister, userLogin, userLogout,  } = require("../controllers/userController")


//auth
router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/logout", /* userLogout */)

module.exports = router
