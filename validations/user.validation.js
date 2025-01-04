import Joi from "joi";

export const validateSignup = (data) => {
    const schema = Joi.object({
        username: Joi.string().email().required().label("Email"),
        password: Joi.string()
            .min(8)
            .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))
            .required()
            .label("Password")
            .messages({
                "string.pattern.base":
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
            }),
        role: Joi.string().valid("admin", "author").label("Role"),
    });
    return schema.validate(data);
};

export const validateLogin = (data) => {
    const schema = Joi.object({
        username: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};
