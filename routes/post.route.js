import * as postController from '../controller/post.controller.js';
import express from 'express';
const router = express.Router();


router.get('/post', postController.getPost);
router.get('/post/:id', postController.getPostById);

router.get('/test', (req,res)=>{
    res.send('test anjing');
});
router.get("/", (req, res) => {
    res.json("Hello");
})

export default router;