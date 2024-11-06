// controllers/chat.controller.js

import { database } from "../config/firebaseConfig.js";
import { ref, push, get, child } from "firebase/database";

// Mendapatkan semua pesan
export const getMessages = async (req, res) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, "messages"));
    if (snapshot.exists()) {
      const messages = snapshot.val();
      res.status(200).json(messages);
    } else {
      res.status(200).json({});
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// Menambahkan pesan baru
export const addMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const messagesRef = ref(database, "messages");

    const newMessage = {
      text,
      timestamp: Date.now(), // Anda juga bisa menggunakan serverTimestamp dari Firebase jika diperlukan
    };

    await push(messagesRef, newMessage);
    res.status(201).json({ message: "Message added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add message" });
  }
};
