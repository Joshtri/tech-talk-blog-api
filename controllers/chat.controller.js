// controllers/chat.controller.js

import Chat from "../models/chat.model.js";

// Mengambil semua pesan dari MongoDB
export const getMessages = async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// Menambahkan pesan baru ke MongoDB
export const addMessage = async (req, res) => {
  try {
    const { text } = req.body;

    const newMessage = new Chat({
      text,
    });

    await newMessage.save();
    res.status(201).json({ message: "Message added successfully" });
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(500).json({ error: "Failed to add message" });
  }
};

// Menghapus semua pesan dari MongoDB
export const deleteAllMessages = async (req, res) => {
  try {
    await Chat.deleteMany({});
    res.status(200).json({ message: "All messages deleted successfully" });
  } catch (error) {
    console.error("Error deleting messages:", error);
    res.status(500).json({ error: "Failed to delete messages" });
  }
};
