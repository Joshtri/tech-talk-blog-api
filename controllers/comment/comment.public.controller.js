// controllers/comment.controller.js
// import { getCommentsByPostIdService, postCommentService, countCommentsByPostIdService } from "../../services/comment.service.js";

import { commentPublicService } from "../../services/comment/index.js";

const getCommentByIdPost = async (req, res) => {
  try {
    const { id } = req.params;
    const postData = await commentPublicService.getCommentsByPostIdService(id);
    res.json(postData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const postComment = async (req, res) => {
  try {
    const savedComment = await commentPublicService.postCommentService(
      req.body
    );
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const countCommentByPostId = async (req, res) => {
  try {
    const { id } = req.params;
    const totalComment =
      await commentPublicService.countCommentsByPostIdService(id);
    res.status(200).json({ count: totalComment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  getCommentByIdPost,
  postComment,
  countCommentByPostId,
};
