import Post from "../models/post.model.js";


// Controller functions
export const getPost = async (req, res) => {
    try {
        const postData = await Post.find({ status_post: 'published' });
        res.json(postData);
    } catch (error) {
        throw error;
        // res.status(500).json({ message: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPostPreview = async (req, res) => {
    const postSlug = decodeURIComponent(req.params.slug); // Dekode slug dari parameter URL

    try {
      // Cari data post berdasarkan slug
      const post = await Post.findOne({ slug: postSlug });
  
      if (!post) {
        return res.status(404).json({
          success: false,
          message: 'Post not found',
        });
      }
  
      res.status(200).json({
        success: true,
        data: post,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: 'Error retrieving post',
      });
    }
};


// export const getPostByIdOrSlug = async (req, res) => {
//     try {
//         const { idOrSlug } = req.params;
//         let post;

//         // Cek apakah parameter adalah ObjectId yang valid
//         if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
//             post = await Post.findById(idOrSlug);
//         } else {
//             // Jika bukan ObjectId, anggap parameter sebagai slug (title)
//             const formattedTitle = idOrSlug.toLowerCase().replace(/-/g, ' ');
//             post = await Post.findOne({ title: formattedTitle });
//         }

//         if (!post) {
//             return res.status(404).json({ message: "Post not found" });
//         }

//         res.json(post);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



