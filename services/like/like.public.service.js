// services/like.service.js
import { validateLikeInput } from "../../validations/like.validation.js";
// import { createLike, deleteLikeByPostId, countLikesByPostId } from "../repositories/like.repository.js";
import {likePublicRepository} from "../../repositories/like/index.js";

const likePostService = async (data) => {
    // Validasi input
    const { isValid, errors } = validateLikeInput(data);
    if (!isValid) {
        const errorMessages = Object.values(errors).join(", ");
        throw new Error(errorMessages); // Lempar error jika validasi gagal
    }

    // Buat like baru
    await likePublicRepository.createLike(data);

    // Hitung jumlah like terbaru
    return await countLikesByPostId(data.postId);
};

const unlikePostService = async (data) => {
    // Validasi input
    const { isValid, errors } = validateLikeInput(data);
    if (!isValid) {
        const errorMessages = Object.values(errors).join(", ");
        throw new Error(errorMessages); // Lempar error jika validasi gagal
    }

    // Hapus like
    const deletedLike = await likePublicRepository.deleteLikeByPostId(data.postId);
    if (!deletedLike) {
        throw new Error("No likes found to remove");
    }

    // Hitung jumlah like terbaru
    return await likePublicRepository.countLikesByPostId(data.postId);
};

const getLikeCountByPostIdService = async (postId) => {
    if (!postId || postId.trim() === "") {
        throw new Error("Post ID is required.");
    }

    return await likePublicRepository.countLikesByPostId(postId);
};


export default {
    likePostService,
    unlikePostService,
    getLikeCountByPostIdService
}