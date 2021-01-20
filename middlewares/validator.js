const Joi = require("joi")

//Validations
exports.registerValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string()
            .min(3)
            .required(),
        lastName: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required(),
        userName: Joi.string()
            .min(3)
            .required(),
    });
    return schema.validate(data)
}

exports.loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .required()
    });
    return schema.validate(data)
}


