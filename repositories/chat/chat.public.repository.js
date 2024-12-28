// repositories/chat.repository.js
import Chat from "../../models/chat.model.js";

const getAllMessages = async () => {
  return await Chat.find().sort({ timestamp: 1 });
};

const createMessage = async (messageData) => {
  const newMessage = new Chat(messageData);
  return await newMessage.save();
};

const deleteAllMessagesFromDB = async () => {
  return await Chat.deleteMany({});
};

export default {
  getAllMessages,
  createMessage,
  deleteAllMessagesFromDB
}