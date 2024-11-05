import Feedback from '../models/feedback.model.js';

// Membuat Feedback baru
export const createFeedback = async (req, res) => {
  try {
    const { tanggapan, rating, userId } = req.body;

    const newFeedback = new Feedback({
      tanggapan,
      rating,
      userId
    });

    await newFeedback.save();
    res.status(201).json({
      message: 'Feedback berhasil ditambahkan.',
      data: newFeedback
    });
  } catch (error) {
    res.status(400).json({ message: 'Gagal menambahkan feedback.', error });
  }
};

// Mendapatkan semua Feedback
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mendapatkan feedback.', error });
  }
};

// Mendapatkan Feedback berdasarkan ID
export const getFeedbackById = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id);

    if (!feedback) {
      return res.status(404).json({ message: 'Feedback tidak ditemukan.' });
    }

    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mendapatkan feedback.', error });
  }
};

// Mengupdate Feedback
export const updateFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const { tanggapan, rating } = req.body;

    const updatedFeedback = await Feedback.findByIdAndUpdate(
      id,
      { tanggapan, rating },
      { new: true, runValidators: true }
    );

    if (!updatedFeedback) {
      return res.status(404).json({ message: 'Feedback tidak ditemukan.' });
    }

    res.status(200).json({
      message: 'Feedback berhasil diperbarui.',
      data: updatedFeedback
    });
  } catch (error) {
    res.status(400).json({ message: 'Gagal memperbarui feedback.', error });
  }
};

// Menghapus Feedback
export const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFeedback = await Feedback.findByIdAndDelete(id);

    if (!deletedFeedback) {
      return res.status(404).json({ message: 'Feedback tidak ditemukan.' });
    }

    res.status(200).json({ message: 'Feedback berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus feedback.', error });
  }
};
