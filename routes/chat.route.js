import express from "express";
import { getMessages, addMessage } from "../controllers/chat.controller.js";

const router = express.Router();

// Route untuk mendapatkan semua pesan
router.get("/chat/messages", getMessages);

// Route untuk menambahkan pesan baru
router.post("/chat/messages", addMessage);

export default router;