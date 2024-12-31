// controllers/like.controller.js
// import { likePostService, unlikePostService, getLikeCountByPostIdService } from "../services/like.service.js";
import { likePublicService } from "../../services/like/index.js";

const likePost = async (req, res) => {
    try {
        const { postId } = req.body;

        // Panggil service untuk menyukai postingan
        const likeCount = await likePublicService.likePostService({ postId });

        res.status(201).json({ message: "Post liked successfully", likeCount });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const unlikePost = async (req, res) => {
    try {
        const { postId } = req.body;

        // Panggil service untuk membatalkan suka
        const likeCount = await likePublicService.unlikePostService({ postId });

        res.status(200).json({ message: "Post unliked successfully", likeCount });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getLikeCountByPostId = async (req, res) => {
    try {
        const { postId } = req.params;

        // Panggil service untuk mendapatkan jumlah like
        const likeCount = await likePublicService.getLikeCountByPostIdService(postId);

        res.status(200).json({ likeCount });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export default {
    likePost,
    unlikePost,
    getLikeCountByPostId
};