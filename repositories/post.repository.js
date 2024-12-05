// repositories/post.repository.js
import Post from "../models/post.model.js";

// export const findAllPublishedPosts = async () => {
//     return await Post.find({ status_post: "published" });
// };

export const findAllPublishedPosts = async () => {
    return await Post.find({ status_post: "published" })
        .sort({ createdAt: -1 }); // Sort descending by createdAt
};

export const findPostById = async (id) => {
    return await Post.findById(id);
};

export const findPostBySlug = async (slug) => {
    return await Post.findOne({ slug });
};
