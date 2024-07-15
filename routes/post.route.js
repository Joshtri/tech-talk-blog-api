import * as postController from '../controller/post.controller.js';
import express from 'express';
const router = express.Router();


router.get('/post', postController.getPost);
router.get('/post/:id', postController.getPostById);

router.get('/test', (req,res)=>{
    res.render('test anjing');
});

export default router;