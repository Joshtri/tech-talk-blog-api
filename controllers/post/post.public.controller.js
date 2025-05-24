// controllers/post.controller.js
// import { getPostsService, getPostByIdService, getPostPreviewService } from "../services/post.public.service.js";
import commentPublicService from "../../services/comment/comment.public.service.js";
import { postPublicService } from "../../services/post/index.js";

const getPosts = async (req, res) => {
  try {
    const posts = await postPublicService.getPostsService();

    // Hitung komentar tiap post tanpa mengubah struktur post lainnya
    const commentCounts = await Promise.all(
      posts.map((post) =>
        commentPublicService.countCommentsByPostIdService(post.id)
      )
    );

    // Gabungkan hasil count dengan post tanpa merusak struktur
    const postsWithCounts = posts.map((post, index) => ({
      ...post,
      commentCount: commentCounts[index],
    }));

    res.json(postsWithCounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getPostsWithCommentCount = async (req, res) => {
//   try {
//     const posts = await postPublicService.getPostsService();

//     // Ambil count komentar untuk setiap post
//     const postsWithCounts = await Promise.all(
//       posts.map(async (post) => {
//         const count = await commentPublicService.countCommentsByPostIdService(post.id);
//         return {
//           ...post,
//           commentCount: count,
//         };
//       })
//     );

//     res.json(postsWithCounts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postPublicService.getPostByIdService(id);
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPostPreview = async (req, res) => {
  try {
    const slug = decodeURIComponent(req.params.slug); // Decode slug dari parameter URL
    const post = await postPublicService.getPostPreviewService(slug);
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  getPosts,
  getPostById,
  getPostPreview,
};
