// repositories/chat.repository.js
import Chat from "../models/chat.model.js";

export const getAllMessages = async () => {
  return await Chat.find().sort({ timestamp: 1 });
};

export const createMessage = async (messageData) => {
  const newMessage = new Chat(messageData);
  return await newMessage.save();
};

export const deleteAllMessagesFromDB = async () => {
  return await Chat.deleteMany({});
};
