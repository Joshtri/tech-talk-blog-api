import express from 'express';
import multer from 'multer';
import { getVoice, handleUploadVoice } from '../controllers/voice.controller.js'; // Adjust the import path as necessary

const router = express.Router();

// Set up storage using multer
const storage = multer.memoryStorage(); // Storing files in memory
const upload = multer({ storage: storage });

// Voice message routes

router.get('/voice', getVoice)
router.post('/voice', upload.single('voice'), handleUploadVoice);

export default router;
