// controllers/comment.controller.js
import { getCommentsByPostIdService, postCommentService, countCommentsByPostIdService } from "../services/comment.service.js";

export const getCommentByIdPost = async (req, res) => {
    try {
        const { id } = req.params;
        const postData = await getCommentsByPostIdService(id);
        res.json(postData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const postComment = async (req, res) => {
    try {
        const savedComment = await postCommentService(req.body);
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const countCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const totalComment = await countCommentsByPostIdService(id);
        res.status(200).json({ count: totalComment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
