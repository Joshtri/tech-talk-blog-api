import express from "express";
import { getMessages, addMessage, getUserId } from "../controllers/chat.controller.js";

const router = express.Router();

// Route untuk mendapatkan semua pesan
router.get("/chat/messages", getMessages);

// Route untuk menambahkan pesan baru
router.post("/chat/messages", addMessage);
router.get('/user', getUserId); // Route baru untuk mendapatkan userId

export default router;