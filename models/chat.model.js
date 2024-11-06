// models/chat.model.js

import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true, // Tambahkan field userId
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
