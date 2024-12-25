import { 
    getStorage, 
    ref, 
    uploadBytesResumable, 
    getDownloadURL 
} from 'firebase/storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig.js'; 
import dotenv from 'dotenv';

dotenv.config();

async function uploadCoverBlog(file) {
if (!file) {
    throw new Error("File tidak ditemukan dalam request.");
}

try {
    const user = process.env.FIREBASE_USER;
    const pass = process.env.FIREBASE_PASS;

    // Log in to Firebase using credentials
    await signInWithEmailAndPassword(auth, user, pass);

    const dateTime = Date.now();
    const fileName = `cover_blog/${dateTime}_${file.originalname}`;
    const storageRef = ref(getStorage(), fileName);
    const metadata = { contentType: file.mimetype };

    // Upload file to Firebase
    const uploadTask = await uploadBytesResumable(storageRef, file.buffer, metadata);

    // Get the URL of the uploaded file
    const uploadedFileUrl = await getDownloadURL(uploadTask.ref);

    console.log("Blog cover image URL uploaded successfully:", uploadedFileUrl);
    return uploadedFileUrl;
} catch (error) {
    console.error("Error uploading blog cover image:", error);
    throw error;
}
}
  
export default uploadCoverBlog;
  