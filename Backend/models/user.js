const Joi = require("joi");


class UserModel {
    constructor(user) {
        this.username = user.username;
        this.password = user.password;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.userId = user.userId;
        this.email = user.email;
        this.dateOfBirth = user.dateOfBirth;
        this.role = user.role;
    }

    static #putValidationSchema = Joi.object({
        userId: Joi.number().optional().integer(),
        firstName: Joi.string().required().min(2).max(100),
        lastName: Joi.string().required().min(2).max(100),
        username: Joi.string().required().min(4).max(100),
        password: Joi.string().required().min(6).max(128),
        dateOfBirth : Joi.date().required(),
        role: Joi.number().required(),
        email: Joi.string().email().required()
    });

    static #postValidationSchema = Joi.object({
        userId: Joi.forbidden(),
        // uuid: Joi.string().optional(),
        firstName: Joi.string().required().min(2).max(100),
        lastName: Joi.string().required().min(2).max(100),
        username: Joi.string().required().min(4).max(100),
        password: Joi.string().required().min(6).max(128),
        dateOfBirth: Joi.date().required(),
        role: Joi.number().required(),
        email: Joi.string().email().required()
    });


    validatePost() {
        const result = UserModel.#postValidationSchema.validate(this, {
            abortEarly: false
        }); //return all validation errors.
        return result.error ? result.error.message : null; // null = no errors.
    }

    validatePut() {
        const result = UserModel.#putValidationSchema.validate(this, {
            abortEarly: false
        }); //return all validation errors.
        return result.error ? result.error.message : null; // null = no errors.
    }
}

module.exports = UserModel;