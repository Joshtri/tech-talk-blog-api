// validations/comment.validation.js

export const validateCommentInput = (data) => {
    const errors = {};

    if (!data.comment_user || data.comment_user.trim() === "") {
        errors.comment_user = "Comment user is required.";
    }

    if (!data.postId || data.postId.trim() === "") {
        errors.postId = "Post ID is required.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
