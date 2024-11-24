// repositories/like.repository.js
import Like from "../models/like.model.js";

export const createLike = async (likeData) => {
    const like = new Like(likeData);
    return await like.save();
};

export const deleteLikeByPostId = async (postId) => {
    return await Like.findOneAndDelete({ postId });
};

export const countLikesByPostId = async (postId) => {
    return await Like.countDocuments({ postId });
};
