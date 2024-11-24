import Like from '../models/like.model.js';
// import Post from '../models/post.model.js';

// Controller untuk menyukai postingan
export const likePost = async (req, res) => {
  try {
    const { postId } = req.body;

    // Buat entitas Like baru
    const like = new Like({ postId });
    await like.save();

    // Hitung jumlah like terbaru
    const likeCount = await Like.countDocuments({ postId });

    res.status(201).json({ message: 'Post liked successfully', likeCount });
  } catch (error) {
    console.error('Error in likePost:', error);
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk membatalkan suka pada postingan
export const unlikePost = async (req, res) => {
  try {
    const { postId } = req.body;

    // Hapus satu entitas Like terkait dengan postId
    const deletedLike = await Like.findOneAndDelete({ postId });
    if (!deletedLike) {
      return res.status(404).json({ message: 'No likes found to remove' });
    }

    // Hitung jumlah like terbaru
    const likeCount = await Like.countDocuments({ postId });

    res.status(200).json({ message: 'Post unliked successfully', likeCount });
  } catch (error) {
    console.error('Error in unlikePost:', error);
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mendapatkan jumlah like
export const getLikeCountByPostId = async (req, res) => {
  try {
    const { postId } = req.params;

    const likeCount = await Like.countDocuments({ postId });

    res.status(200).json({ likeCount });
  } catch (error) {
    console.error('Error in getLikeCountByPostId:', error);
    res.status(500).json({ message: error.message });
  }
};
