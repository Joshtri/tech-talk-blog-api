import { postCmsRepository } from "../../repositories/post/index.js";

const getAllPostsForCMS = async () => {
  return await postCmsRepository.findAllPosts();
};

const getPostByIdForCMS = async (id) => {
  return await postCmsRepository.findPostById(id);
};

const createNewPost = async (postData) => {
  return await postCmsRepository.createPost(postData);
};

const updateExistingPost = async (id, postData) => {
  return await postCmsRepository.updatePost(id, postData);
};

const deletePostById = async (id) => {
  return await postCmsRepository.deletePost(id);
};

export default{
  getAllPostsForCMS,
  getPostByIdForCMS,
  createNewPost,
  updateExistingPost,
  deletePostById
}