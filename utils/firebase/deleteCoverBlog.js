import { getStorage, ref, deleteObject } from "firebase/storage";
import { storage } from "../../config/firebaseConfig.js"; // Pastikan Anda telah mengatur konfigurasi Firebase

/**
 * Deletes a file from Firebase Storage based on its URL.
 * @param {string} fileUrl - The full path or URL of the file to be deleted.
 * @returns {Promise<void>}
 * @throws {Error} If the deletion fails.
 */
export const deleteFileFromFirebase = async (fileUrl) => {
  try {
    // Create a reference to the file to delete
    const fileRef = ref(storage, fileUrl);

    // Delete the file
    await deleteObject(fileRef);
    console.log("File deleted successfully from Firebase:", fileUrl);
  } catch (error) {
    console.error("Error deleting file from Firebase:", error.message);
    throw error;
  }
};
