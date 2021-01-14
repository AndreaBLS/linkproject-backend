const User = require("../models/userModel")
const { registerValidation, loginValidation } = require("../middlewares/validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.userRegister = async (req, res) => {
    // validating data before creating user
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Checking if the email exists in our DB
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send("Email already exists in our database")

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Create a new user
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        res.send({ user: user._id })
    } catch (err) {
        res.status(400).send(err)
    }
}

exports.userLogin = async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //Checking if the email exists in our DB
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("Email not found,disclosing that information just for testing purposes")

    //Is password correct?
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send("Password is wrong,disclosing that information just for testing purposes")

    // create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header("auth-token", token).send({ token: token, message: "login succesful!" })
}
/* exports.userLogout = async(req,res) =>{

} */

exports.userLogout = async (req, res) => {
    res.setCookie("auth-token", "").send({ message: "logged out succesfully" })
}

