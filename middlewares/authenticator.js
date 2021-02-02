const User = require('../models/userModel');
const jwt = require("jsonwebtoken")


module.exports = function (req, res, next) {
    const token = req.cookies.authToken || req.header.token
    if (!token) return res.status(401).send("Access Denied")

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.userID = verified
        next()
    } catch (err) {
        res.status(400).send("Invalid Token")
    }
}

/* const createError = require('http-errors');

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        const user = await User.findByToken(token);
        console.log('the user', user);
        if (!user) throw new createError.NotFound();
        req.user = user
        next();
    } catch (e) {
        next(e);q
    }
};

module.exports = auth */