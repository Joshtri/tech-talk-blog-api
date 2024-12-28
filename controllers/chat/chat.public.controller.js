// controllers/chat.controller.js
// import {
//   getMessagesService,
//   addMessageService,
//   deleteAllMessagesService,
//   getUserIdService,
// } from "../services/chat.service.js";

import {chatPublicService} from "../../services/chat/index.js";

const getMessages = async (req, res) => {
  try {
    const messages = await chatPublicService.getMessagesService();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

const addMessage = async (req, res) => {
  try {
    const { text, userId } = req.body;

    // Panggil service untuk menambahkan pesan
    await chatPublicService.addMessageService({ text, userId });

    res.status(201).json({ message: "Message added successfully" });
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(400).json({ error: error.message });
  }
};

const deleteAllMessages = async (req, res) => {
  try {
    await chatPublicService.deleteAllMessagesService();
    res.status(200).json({ message: "All messages deleted successfully" });
  } catch (error) {
    console.error("Error deleting messages:", error);
    res.status(500).json({ error: "Failed to delete messages" });
  }
};

const getUserId = async (req, res) => {
  try {
    const userId = await chatPublicService.getUserIdService();
    res.status(200).json({ userId });
  } catch (error) {
    console.error("Error generating userId:", error);
    res.status(500).json({ error: "Failed to generate userId" });
  }
};

export default {
  getMessages,
  addMessage,
  deleteAllMessages,
  getUserId
}