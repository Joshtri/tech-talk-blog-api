import * as postController from '../controller/post.controller.js';
import express from 'express';
const router = express.Router();


router.get('/post', postController.getPost);
router.get('/post/:id', postController.getPostById);


export default router;