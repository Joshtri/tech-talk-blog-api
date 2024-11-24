// validations/post.validation.js

export const validateIdOrSlug = (param) => {
    const errors = {};

    if (!param || param.trim() === "") {
        errors.param = "ID or slug is required.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
