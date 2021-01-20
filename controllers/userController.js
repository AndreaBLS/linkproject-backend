const User = require("../models/userModel")
const { registerValidation, loginValidation } = require("../middlewares/validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const createError = require('http-errors')

exports.userRegister = async (req, res) => {

    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send({ message: "Email already exists in our database" })

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        res.send({ user: savedUser._id })
    } catch (err) {
        res.status(400).send(err)
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { error } = loginValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const user = await User.findOne({ email: req.body.email })

        if (!user) return res.status(400).send({ message: "Email not found,disclosing that information just for testing purposes" })

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) return res.status(400).send({ message: "Password is wrong,disclosing that information just for testing purposes" })

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET) // .toString()

        res
            .status(200)
            .cookie('auth-token', token, {
                expires: new Date(Date.now() + 604800000),
                secure: false, // if we are not using https
                httpOnly: true,
            })
            /*         .send(user) */
            .send({
                user: user, message: "login successful"
            })
    } catch (err) {
        res.send(err)
    }

/*     res.header("auth-token", token).send({ token: token, message: "login succesful!" })
 */}
/* exports.userLogout = async(req,res) =>{

} */

exports.userLogout = async (req, res) => {
    res.setCookie("auth-token", "").send({ message: "logged out succesfully" })
}

exports.getUser = async (req, res, next) => {
    try {
        const user = await User
            .findById(req.params.id)
            .select('-password -__v')
        /*             .populate("") */
        if (!user) throw new createError.NotFound();
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const { firstName, lastName, userName, avatar } = req.body
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: { firstName, lastName, userName, avatar },
            },
            {
                new: true
            }
        );
        console.log(user)
        res.status(200).send(user)
    } catch (e) {
        next(e);
    }
}