import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import prerender from 'prerender-node'; // Import Prerender.io middleware
import Post from "./models/post.model.js"; // Ubah path ini sesuai struktur proyek Anda
import connectDB from "./config/dbConfig.js";

import postRoute from './routes/post.route.js';
import commentRoute from './routes/comment.route.js';
import subscriptionRoute from './routes/subscription.route.js';
import likeRoute from "./routes/like.route.js";
import { loginToFirebase } from './config/firebaseConfig.js';

// Load environment variables from .env file
config();




// Login ke Firebase saat server mulai
loginToFirebase().then(() => {
    console.log('Server connected to Firebase');
  }).catch((error) => {
    console.error('Firebase connection failed:', error);
    process.exit(1); // Keluar jika gagal login
  });
  

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000; // Fallback to port 3000 if PORT is not defined in .env

// CORS configuration (allow all origins for development)
const corsOptions = {
    origin: '*',
    methods: ["POST", "GET"],
    credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Prerender.io middleware setup
prerender.set('prerenderToken', `${process.env.PRERENDER_TOKEN}`); // Ganti dengan token Prerender.io Anda
app.use(prerender); // Gunakan middleware Prerender.io sebelum rute lainnya

// Routes
app.use('/api', postRoute, commentRoute, subscriptionRoute, likeRoute);

app.get('/', (req, res) => {
    res.json("hello");
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
