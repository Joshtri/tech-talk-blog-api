import express from "express";
// import { getMessages, addMessage, getUserId } from "../controllers/chat.controller.js";
import { chatPublicController } from "../../controllers/chat/index.js";

const chatPublicRoute = express.Router();

// Route untuk mendapatkan semua pesan
chatPublicRoute.get("/chat/messages", chatPublicController.getMessages);

// Route untuk menambahkan pesan baru
chatPublicRoute.post("/chat/messages", chatPublicController.addMessage);
chatPublicRoute.get('/user', chatPublicController.getUserId); // Route baru untuk mendapatkan userId

export default chatPublicRoute;