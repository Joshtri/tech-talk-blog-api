import Post from "../../models/post.model.js";

// Get all posts (for CMS)
const findAllPosts = async () => {
  return await Post.find().sort({ createdAt: -1 });
};

// Get a post by its ID
const findPostById = async (id) => {
  return await Post.findById(id);
};

// Create a new post
const createPost = async (postData) => {
  const newPost = new Post(postData);
  return await newPost.save();
};

// Update an existing post
const updatePost = async (id, postData) => {
  return await Post.findByIdAndUpdate(id, postData, { new: true });
};

// Delete a post
const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

// Export as a single object
export default {
  findAllPosts,
  findPostById,
  createPost,
  updatePost,
  deletePost,
};