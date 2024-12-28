// repositories/like.repository.js
import Like from "../../models/like.model.js";

const createLike = async (likeData) => {
    const like = new Like(likeData);
    return await like.save();
};

const deleteLikeByPostId = async (postId) => {
    return await Like.findOneAndDelete({ postId });
};

const countLikesByPostId = async (postId) => {
    return await Like.countDocuments({ postId });
};


export default {
    createLike,
    deleteLikeByPostId,
    countLikesByPostId
}
