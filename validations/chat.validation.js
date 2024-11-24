// validations/chat.validation.js

export const validateAddMessageInput = (data) => {
  const errors = {};

  if (!data.userId || data.userId.trim() === "") {
    errors.userId = "userId is required.";
  }

  if (!data.text || data.text.trim() === "") {
    errors.text = "Message text is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
