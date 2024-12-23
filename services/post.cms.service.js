import {
  findAllPosts,
  findPostById,
  createPost,
  updatePost,
  deletePost,
} from "../repositories/post.cms.repository.js";

export const getAllPostsForCMS = async () => {
  return await findAllPosts();
};

export const getPostByIdForCMS = async (id) => {
  return await findPostById(id);
};

export const createNewPost = async (postData) => {
  return await createPost(postData);
};

export const updateExistingPost = async (id, postData) => {
  return await updatePost(id, postData);
};

export const deletePostById = async (id) => {
  return await deletePost(id);
};
