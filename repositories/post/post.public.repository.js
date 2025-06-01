// repositories/post.repository.js
import Post from "../../models/post.model.js";

// const findAllPublishedPosts = async () => {
//     return await Post.find({ status_post: "published" });
// };

const findAllPublishedPosts = async () => {
  return await Post.find({ status_post: "published" }); // Sort descending by createdAt
};

const findPostById = async (id) => {
  return await Post.findById(id);
};

const findPostBySlug = async (slug) => {
  return await Post.findOne({ slug });
};

// const countPostsById = async (id) => {
//   return await Post.countDocuments({ _id: id });
// };

const countCommentsByPostId = async (postId) => {
  return await Post.countDocuments({ postId });
};

export default {
  findAllPublishedPosts,
  findPostById,
  findPostBySlug,
};
