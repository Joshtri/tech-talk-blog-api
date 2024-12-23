import {
    getAllPostsForCMS,
    getPostByIdForCMS,
    createNewPost,
    updateExistingPost,
    deletePostById,
  } from "../services/post.cms.service.js";
  
  /**
   * Get all posts for CMS
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   */
  export const getAllPosts = async (req, res) => {
    try {
      const posts = await getAllPostsForCMS();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  /**
   * Get a specific post by ID
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   */
  export const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
      const post = await getPostByIdForCMS(id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  /**
   * Create a new post
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   */
  export const createPost = async (req, res) => {
    try {
      const postData = req.body;
      const newPost = await createNewPost(postData);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  /**
   * Update an existing post
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   */
  export const updatePost = async (req, res) => {
    const { id } = req.params;
    const postData = req.body;
    try {
      const updatedPost = await updateExistingPost(id, postData);
      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  /**
   * Delete a post by ID
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   */
  export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedPost = await deletePostById(id);
      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  