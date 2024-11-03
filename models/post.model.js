import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true, // Pastikan slug unik
    required: true,
  },

  content: {
    type: String,
    required: true,
  },
  description:{
    type:String,
    required:true
  },

  // labels:{

  // },

  status_post:{
    type: String,
    enum: ['draft', 'published'],
    // default: 'published',
    required:true
  },

  coverImageUrl: {
    type: String,
    default: null
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});


// Middleware untuk membuat slug sebelum disimpan
postSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = createSlug(this.title);
  }
  next();
});

// Fungsi untuk membuat slug
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Ganti karakter non-alphanumeric dengan tanda hubung
    .replace(/^-+|-+$/g, ''); // Hapus tanda hubung di awal/akhir
}


export default mongoose.model("Post", postSchema);