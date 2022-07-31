const Joi = require("joi");

class roomModel {

    constructor(room) {
        console.log("constructor roomModel : ", room)
        this.roomName = room.roomName;
    }

    static #postValidationSchema = Joi.object({
        roomName: Joi.string().required().min(3).max(50)
    });

    validatePost() {
        const result = roomModel.#postValidationSchema.validate(this, { abortEarly: false }); //return all validation errors.
        return result.error ? result.error.message : null; // null = no errors.
    }
}

module.exports = roomModel;
