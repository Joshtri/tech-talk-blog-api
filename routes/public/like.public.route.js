import express from "express";
// import * as  from "../../controllers/like/index.js"; // Mengimpor controller dari index.js
import { likePublicController } from "../../controllers/like/index.js";

const likePublicRoute = express.Router();


// Route untuk menyukai postingan
likePublicRoute.post("/like", likePublicController.likePost);

// Route untuk membatalkan suka pada postingan
likePublicRoute.post("/unlike", likePublicController.unlikePost);

// Route untuk mendapatkan jumlah like pada postingan
likePublicRoute.get("/like/:postId", likePublicController.getLikeCountByPostId);

export default likePublicRoute;