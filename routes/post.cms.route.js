import express from "express";
import * as postController from "../controllers/post.cms.controller.js";
import upload from '../config/multerConfig.js'

const postCmsRoute = express.Router();

// Get all posts (CMS view)
postCmsRoute.get("/post", postController.getAllPosts);

// Get a specific post by ID
postCmsRoute.get("/post/:id", postController.getPostById);

// Create a new post
postCmsRoute.post("/post", upload.single('coverImage'), postController.createPost);

// Update an existing post
postCmsRoute.put("/post/:id", upload.single('coverImage'), postController.updatePost);

// Delete a post by ID
postCmsRoute.delete("/post/:id", postController.deletePost);

export default postCmsRoute;
