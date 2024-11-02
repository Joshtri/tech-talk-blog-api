import * as postController from '../controllers/post.controller.js';
import express from 'express';
const router = express.Router();


router.get('/post', postController.getPost);
router.get('/post/:id', postController.getPostById);
// router.get('/post/:slug', postController.getPostBySlug);

// router.get('/post/:idOrSlug', postController.getPostByIdOrSlug); // Endpoint untuk id atau slug

router.get("/", (req, res) => {
    res.json("Hello");
})

export default router;