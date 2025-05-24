// services/comment.service.js
import { faker } from "@faker-js/faker";
import { validateCommentInput } from "../../validations/comment.validation.js";
import { commentPublicRepository } from "../../repositories/comment/index.js";
// import { findCommentsByPostId, createComment, countCommentsByPostId } from "../../repositories/comment/comment.public.repository.js";

const getCommentsByPostIdService = async (postId) => {
  if (!postId) {
    throw new Error("Post ID is required.");
  }

  return await commentPublicRepository.findCommentsByPostId(postId);
};

const postCommentService = async (data) => {
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

  return await commentPublicRepository.createComment(newComment);
};

const countCommentsByPostIdService = async (postId) => {
  if (!postId) {
    throw new Error("Post ID is required.");
  }

  return await commentPublicRepository.countCommentsByPostId(postId);
};

export default {
  getCommentsByPostIdService,
  postCommentService,
  countCommentsByPostIdService,
};
