// services/post.service.js
import { validateIdOrSlug } from "../../validations/post.validation.js";
// import { findAllPublishedPosts, findPostById, findPostBySlug } from "../repositories/post.public.repository.js";
import { postPublicRepository } from '../../repositories/post/index.js'

const getPostsService = async () => {
    return await postPublicRepository.findAllPublishedPosts();
};

const getPostByIdService = async (id) => {
    // Validasi ID
    const { isValid, errors } = validateIdOrSlug(id);
    if (!isValid) {
        const errorMessages = Object.values(errors).join(", ");
        throw new Error(errorMessages);
    }

    // Cari post berdasarkan ID
    const post = await postPublicRepository.findPostById(id);
    if (!post) {
        throw new Error("Post not found");
    }

    return post;
};

const getPostPreviewService = async (slug) => {
    // Validasi slug
    const { isValid, errors } = validateIdOrSlug(slug);
    if (!isValid) {
        const errorMessages = Object.values(errors).join(", ");
        throw new Error(errorMessages);
    }

    // Cari post berdasarkan slug
    const post = await postPublicRepository.findPostBySlug(slug);
    if (!post) {
        throw new Error("Post not found");
    }

    return post;
};

export default{
    getPostsService,
    getPostByIdService,
    getPostPreviewService
}