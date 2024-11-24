// controllers/like.controller.js
import { likePostService, unlikePostService, getLikeCountByPostIdService } from "../services/like.service.js";

export const likePost = async (req, res) => {
    try {
        const { postId } = req.body;

        // Panggil service untuk menyukai postingan
        const likeCount = await likePostService({ postId });

        res.status(201).json({ message: "Post liked successfully", likeCount });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const unlikePost = async (req, res) => {
    try {
        const { postId } = req.body;

        // Panggil service untuk membatalkan suka
        const likeCount = await unlikePostService({ postId });

        res.status(200).json({ message: "Post unliked successfully", likeCount });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getLikeCountByPostId = async (req, res) => {
    try {
        const { postId } = req.params;

        // Panggil service untuk mendapatkan jumlah like
        const likeCount = await getLikeCountByPostIdService(postId);

        res.status(200).json({ likeCount });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
