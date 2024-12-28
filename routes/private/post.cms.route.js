import express from "express";
import { postPrivateController } from "../../controllers/post/index.js"; // Mengimpor dari index.js
import upload from "../../config/multerConfig.js";

const postCmsRoute = express.Router();

// Rute untuk CMS
postCmsRoute.get("/post", postPrivateController.getAllPosts); // Get all posts
postCmsRoute.get("/post/:id", postPrivateController.getPostById); // Get a specific post by ID
postCmsRoute.post(
  "/post",
  upload.single("coverImage"),
  postPrivateController.createPost // Create a new post
);
postCmsRoute.put(
  "/post/:id",
  upload.single("coverImage"),
  postPrivateController.updatePost // Update an existing post
);
postCmsRoute.delete("/post/:id", postPrivateController.deletePost); // Delete a post by ID

export default postCmsRoute;
