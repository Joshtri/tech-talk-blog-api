import express from "express";
import { postCmsController } from "../../controllers/post/index.js"; // Mengimpor dari index.js
import upload from "../../config/multerConfig.js";

const postCmsRoute = express.Router();

// Rute untuk CMS
postCmsRoute.get("/post", postCmsController.getAllPosts); // Get all posts
postCmsRoute.get("/post/:id", postCmsController.getPostById); // Get a specific post by ID
postCmsRoute.post(
  "/post",
  upload.single("coverImage"),
  postCmsController.createPost // Create a new post
);
postCmsRoute.put(
  "/post/:id",
  upload.single("coverImage"),
  postCmsController.updatePost // Update an existing post
);
postCmsRoute.delete("/post/:id", postCmsController.deletePost); // Delete a post by ID

export default postCmsRoute;
