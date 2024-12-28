import { postPrivateRepository } from "../../repositories/post/index.js";

const getAllPostsForCMS = async () => {
  return await postPrivateRepository.findAllPosts();
};

const getPostByIdForCMS = async (id) => {
  return await postPrivateRepository.findPostById(id);
};

const createNewPost = async (postData) => {
  return await postPrivateRepository.createPost(postData);
};

const updateExistingPost = async (id, postData) => {
  return await postPrivateRepository.updatePost(id, postData);
};

const deletePostById = async (id) => {
  return await postPrivateRepository.deletePost(id);
};

export default{
  getAllPostsForCMS,
  getPostByIdForCMS,
  createNewPost,
  updateExistingPost,
  deletePostById
};