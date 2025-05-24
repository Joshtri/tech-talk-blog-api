// repositories/comment.repository.js
import Comment from "../../models/comment.model.js";

const findCommentsByPostId = async (postId) => {
  return await Comment.find({ postId });
};

const createComment = async (commentData) => {
  const comment = new Comment(commentData);
  return await comment.save();
};

const countCommentsByPostId = async (postId) => {
  return await Comment.countDocuments({ postId });
};

export default {
  findCommentsByPostId,
  createComment,
  countCommentsByPostId,
};
