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

export const getPostByIdOrSlug = async (req, res) => {
    try {
        const { idOrSlug } = req.params;
        let post;

        // Cek apakah parameter adalah ObjectId yang valid
        if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
            post = await Post.findById(idOrSlug);
        } else {
            // Jika bukan ObjectId, anggap parameter sebagai slug (title)
            const formattedTitle = idOrSlug.toLowerCase().replace(/-/g, ' ');
            post = await Post.findOne({ title: formattedTitle });
        }

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



