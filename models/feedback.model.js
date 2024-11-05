import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  tanggapan: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
}, {
  timestamps: false // Menonaktifkan timestamps otomatis dari Mongoose
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
