// services/chat.service.js
import { v4 as uuidv4 } from 'uuid';
// import { getAllMessages, createMessage, deleteAllMessagesFromDB } from "../../repositories/chat/chat.public.repository.js";
import { validateAddMessageInput } from "../../validations/chat.validation.js";
import {chatPublicRepository} from '../../repositories/chat/index.js';



const getMessagesService = async () => {
  return await chatPublicRepository.getAllMessages();
};

const addMessageService = async (data) => {
  // Validasi input
  const { isValid, errors } = validateAddMessageInput(data);
  if (!isValid) {
    const errorMessages = Object.values(errors).join(", ");
    throw new Error(errorMessages);
  }

  // Buat pesan baru
  return await chatPublicRepository.createMessage(data);
};

const deleteAllMessagesService = async () => {
  return await chatPublicRepository.deleteAllMessagesFromDB();
};

const getUserIdService = async () => {
  // Menghasilkan UUID baru
  return uuidv4();
};

export default {
  getMessagesService,
  addMessageService,
  deleteAllMessagesService,
  getUserIdService
}