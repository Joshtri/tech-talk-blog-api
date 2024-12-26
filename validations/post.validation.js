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



export const validatePostInput = (data) => {
    const errors = {};

    if (!data.title || data.title.trim() === "") {
        errors.title = "Title is required.";
    }

    if (!data.content || data.content.trim() === "") {
        errors.content = "Content is required.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};