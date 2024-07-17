import Post from "../models/post.model.js";


// Controller functions
export const getPost = async (req, res) => {
    try {
        const postData = await Post.find({ status_post: 'published' });
        res.json(postData);
    } catch (error) {
        throw error;
        // res.status(500).json({ message: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};