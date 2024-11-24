// repositories/comment.repository.js
import Comment from "../models/comment.model.js";

export const findCommentsByPostId = async (postId) => {
    return await Comment.find({ postId });
};

export const createComment = async (commentData) => {
    const comment = new Comment(commentData);
    return await comment.save();
};

export const countCommentsByPostId = async (postId) => {
    return await Comment.countDocuments({ postId });
};
