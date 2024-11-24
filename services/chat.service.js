// services/chat.service.js
import { v4 as uuidv4 } from 'uuid';
import { getAllMessages, createMessage, deleteAllMessagesFromDB } from "../repositories/chat.repository.js";
import { validateAddMessageInput } from "../validations/chat.validation.js";

export const getMessagesService = async () => {
  return await getAllMessages();
};

export const addMessageService = async (data) => {
  // Validasi input
  const { isValid, errors } = validateAddMessageInput(data);
  if (!isValid) {
    const errorMessages = Object.values(errors).join(", ");
    throw new Error(errorMessages);
  }

  // Buat pesan baru
  return await createMessage(data);
};

export const deleteAllMessagesService = async () => {
  return await deleteAllMessagesFromDB();
};

export const getUserIdService = async () => {
  // Menghasilkan UUID baru
  return uuidv4();
};
