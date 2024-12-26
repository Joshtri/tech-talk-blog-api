import { deleteFileFromFirebase } from "./deleteCoverBlog.js";
import  uploadCoverBlog from "./uploadCoverBlog.js";

export const replaceCoverImage = async (currentImageUrl, newImageFile) => {
  try {
    // Delete existing cover image if present
    if (currentImageUrl) {
      await deleteFileFromFirebase(currentImageUrl);
    }

    // Upload new cover image
    const newImageUrl = await uploadCoverBlog(newImageFile);
    return newImageUrl;
  } catch (error) {
    console.error("Error replacing cover image:", error);
    throw new Error("Failed to replace cover image");
  }
};
