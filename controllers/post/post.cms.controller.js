// import {
//   getAllPostsForCMS,
//   getPostByIdForCMS,
//   createNewPost,
//   updateExistingPost,
//   deletePostById,
// } from "../services/post.cms.service.js";
import uploadCoverBlog from "../../utils/firebase/uploadCoverBlog.js"; // Import the upload utility
import {deleteFileFromFirebase} from "../../utils/firebase/deleteCoverBlog.js";
import { replaceCoverImage } from "../../utils/firebase/replaceCoverImage.js";


import {postCmsService} from '../../services/post/index.js'


/**
 * Get all posts for CMS
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const getAllPosts = async (req, res) => {
  try {
    const posts = await postCmsService.getAllPostsForCMS();
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
const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postCmsService.getPostByIdForCMS(id);
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
const createPost = async (req, res) => {
  try {
    const { title, description, content, status_post } = req.body;
    const file = req.file; // File from middleware

    // Check if file is provided in the request
    if (!file) {
      return res.status(400).json({
        success: false,
        message: 'Cover image file is required.',
      });
    }

    // Upload cover image to Firebase using the utility function
    const coverImageUrl = await uploadCoverBlog(file);

    // Prepare the post data, including the uploaded cover image URL
    const postData = {
      title,
      description,
      content,
      status_post,
      coverImageUrl, // Include the cover image URL in the post data
    };

    // Create a new post using the service function
    const newPost = await postCmsService.createNewPost(postData);

    // Respond with success message and the newly created post
    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: newPost,
      // redirectUrl: '/data/post', // URL to redirect after creation
    });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update an existing post
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const updatePost = async (req, res) => {
  const { id } = req.params;
  const postData = req.body;

  try {
    // Handle cover image replacement if a new file is uploaded
    if (req.file) {
      postData.coverImageUrl = await replaceCoverImage(postData.coverImageUrl, req.file);
    }

    const updatedPost = await postCmsService.updateExistingPost(id, postData);
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    console.log(`berhasil update data`);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(`gagal update data ${error}`);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a post by ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postCmsService.getPostByIdForCMS(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.coverImageUrl) {
      try {
        await deleteFileFromFirebase(post.coverImageUrl);
      } catch (fileError) {
        console.error("Failed to delete file from Firebase:", fileError.message);
      }
    }

    const deletedPost = await postCmsService.deletePostById(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post and associated file deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export default{
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}