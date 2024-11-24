// services/comment.service.js
import { faker } from '@faker-js/faker';
import { validateCommentInput } from "../validations/comment.validation.js";
import { findCommentsByPostId, createComment, countCommentsByPostId } from "../repositories/comment.repository.js";

export const getCommentsByPostIdService = async (postId) => {
    if (!postId) {
        throw new Error("Post ID is required.");
    }

    return await findCommentsByPostId(postId);
};

export const postCommentService = async (data) => {
    // Gunakan fungsi validasi
    const { isValid, errors } = validateCommentInput(data);

    if (!isValid) {
        const errorMessages = Object.values(errors).join(", ");
        throw new Error(errorMessages); // Melempar error jika validasi gagal
    }

    // Logika bisnis lainnya
    const username = data.username || faker.internet.userName();
    const newComment = {
        comment_user: data.comment_user,
        username,
        postId: data.postId,
    };

    return await createComment(newComment);
};

export const countCommentsByPostIdService = async (postId) => {
    if (!postId) {
        throw new Error("Post ID is required.");
    }

    return await countCommentsByPostId(postId);
};
