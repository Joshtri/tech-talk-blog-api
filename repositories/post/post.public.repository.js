// repositories/post.repository.js
import Post from "../../models/post.model.js";

// const findAllPublishedPosts = async () => {
//     return await Post.find({ status_post: "published" });
// };

const findAllPublishedPosts = async () => {
    return await Post.find({ status_post: "published" })
        .sort({ createdAt: -1 }); // Sort descending by createdAt
};

const findPostById = async (id) => {
    return await Post.findById(id);
};

const findPostBySlug = async (slug) => {
    return await Post.findOne({ slug });
};

export default {
    findAllPublishedPosts,
    findPostById,
    findPostBySlug
}
