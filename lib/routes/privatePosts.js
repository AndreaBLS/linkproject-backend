const router = require("express").Router()
const User = require("../models/User")
const verify = require("../../verifyToken")

router.get("/", verify, (req, res) => {
    res.send({message: "Access to private data granted via login to user", userInfo: req.user})  
    /// infos for individual user User.findbyOne({_id: req.user})  
})

module.exports = router
