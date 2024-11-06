// controllers/chat.controller.js

import Chat from "../models/chat.model.js";
import { v4 as uuidv4 } from 'uuid';

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




// Fungsi untuk menghasilkan dan mengembalikan userId baru
export const getUserId = async (req, res) => {
  try {
    const userId = uuidv4();
    res.status(200).json({ userId });
  } catch (error) {
    console.error('Error generating userId:', error);
    res.status(500).json({ error: 'Failed to generate userId' });
  }
};

// controllers/chat.controller.js

export const addMessage = async (req, res) => {
    try {
      const { text, userId } = req.body;
  
      if (!userId) {
        return res.status(400).json({ error: 'userId is required' });
      }
  
      const newMessage = new Chat({
        text,
        userId,
      });
  
      await newMessage.save();
      res.status(201).json({ message: 'Message added successfully' });
    } catch (error) {
      console.error('Error adding message:', error);
      res.status(500).json({ error: 'Failed to add message' });
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
