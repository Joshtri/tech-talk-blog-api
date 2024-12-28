import express from "express";
import { postPublicController } from "../../controllers/post/index.js"; // Mengimpor controller dari index.js

const postPublicRoute = express.Router();

// Rute untuk publik
postPublicRoute.get("/post", postPublicController.getPosts); // Get all public posts
postPublicRoute.get("/post/:slug", postPublicController.getPostPreview); // Get post preview by slug

// Tambahkan endpoint lain jika diperlukan
postPublicRoute.get("/", (req, res) => {
  res.json("Welcome to the Public Post API");
});

export default postPublicRoute;
