import { 
    getStorage, 
    ref, 
    uploadBytesResumable, 
    getDownloadURL 
  } from 'firebase/storage';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../config/firebaseConfig.js'; // Make sure the path is correct
  import dotenv from 'dotenv';
  
  dotenv.config();
  
  async function uploadVoice(file) {
    if (!file) {
      throw new Error("No file found in the request.");
    }
  
    try {
      const user = process.env.FIREBASE_USER;
      const pass = process.env.FIREBASE_PASS;
  
      // Sign in to Firebase using credentials
      await signInWithEmailAndPassword(auth, user, pass);
  
      const dateTime = Date.now();
      const fileName = `voice_messages/${dateTime}_${file.originalname}`;
      const storageRef = ref(getStorage(), fileName);
      const metadata = { contentType: file.mimetype };
  
      // Upload file to Firebase
      const uploadTask = await uploadBytesResumable(storageRef, file.buffer, metadata);
  
      // Get URL from Firebase Storage
      const uploadedFileUrl = await getDownloadURL(uploadTask.ref);
  
      console.log("Voice URL uploaded successfully:", uploadedFileUrl);
      return uploadedFileUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  }
  
  export default uploadVoice;
  