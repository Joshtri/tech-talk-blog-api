import * as commentController from '../controllers/comment.controller.js';
import express from 'express';
const router = express.Router();



router.get('/comment/:id', commentController.getCommentByIdPost);
router.post('/comment', commentController.postComment);


export default router;