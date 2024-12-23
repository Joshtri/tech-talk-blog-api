import express from "express";
import * as postController from "../controllers/post.cms.controller.js";

const postCmsRoute = express.Router();

// Get all posts (CMS view)
postCmsRoute.get("/post", postController.getAllPosts);

// Get a specific post by ID
postCmsRoute.get("/post/:postId", postController.getPostById);

// Create a new post
postCmsRoute.post("/post", postController.createPost);

// Update an existing post
postCmsRoute.put("/post/:postId", postController.updatePost);

// Delete a post by ID
postCmsRoute.delete("/post/:postId", postController.deletePost);

export default postCmsRoute;
