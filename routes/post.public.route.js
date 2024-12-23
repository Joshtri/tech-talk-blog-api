import * as postController from '../controllers/post.public.controller.js';
import express from 'express';
const postPublicRoute = express.Router();


postPublicRoute.get('/post', postController.getPost);
// postPublicRoute.get('/post/:id', postController.getPostById);
// postPublicRoute.get('/post/:slug', postController.getPostBySlug);
postPublicRoute.get('/post/:slug', postController.getPostPreview);

// postPublicRoute.get('/post/:idOrSlug', postController.getPostByIdOrSlug); // Endpoint untuk id atau slug

postPublicRoute.get("/", (req, res) => {
    res.json("Hello");
})

export default postPublicRoute;