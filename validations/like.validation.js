// validations/like.validation.js

export const validateLikeInput = (data) => {
    const errors = {};

    if (!data.postId || data.postId.trim() === "") {
        errors.postId = "Post ID is required.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
