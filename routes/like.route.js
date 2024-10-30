import express from 'express';
import {
  likePost,
  unlikePost,
  getLikeCountByPostId,
} from '../controllers/like.controller.js';

const router = express.Router();

// Route untuk menyukai postingan
router.post('/like', likePost);

// Route untuk membatalkan suka pada postingan
router.post('/unlike', unlikePost);

// Route untuk mendapatkan jumlah like pada postingan
router.get('/like/:postId', getLikeCountByPostId);

export default router;
