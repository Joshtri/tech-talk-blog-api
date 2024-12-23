// controllers/post.controller.js
import { getPostsService, getPostByIdService, getPostPreviewService } from "../services/post.public.service.js";

export const getPost = async (req, res) => {
    try {
        const posts = await getPostsService();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await getPostByIdService(id);
        res.json(post);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getPostPreview = async (req, res) => {
    try {
        const slug = decodeURIComponent(req.params.slug); // Decode slug dari parameter URL
        const post = await getPostPreviewService(slug);
        res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
