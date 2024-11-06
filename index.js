import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import prerender from 'prerender-node';
import Post from "./models/post.model.js"; // Sesuaikan dengan struktur proyek Anda
import connectDB from "./config/dbConfig.js";
import { Server } from "socket.io"; // Import Socket.IO

import { scheduleVoiceDeletion } from './controllers/voice.controller.js';
import postRoute from './routes/post.route.js';
import commentRoute from './routes/comment.route.js';
import subscriptionRoute from './routes/subscription.route.js';
import likeRoute from "./routes/like.route.js";
import { loginToFirebase } from './config/firebaseConfig.js';
import voiceRoute from "./routes/voice.route.js";

// Load environment variables from .env file
config();

// Login ke Firebase saat server mulai
loginToFirebase()
  .then(() => {
    console.log('Server connected to Firebase');
  })
  .catch((error) => {
    console.error('Firebase connection failed:', error);
    process.exit(1);
  });

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: '*',
  methods: ["POST", "GET"],
  credentials: true
};
scheduleVoiceDeletion();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Prerender.io middleware setup
prerender.set('prerenderToken', `${process.env.PRERENDER_TOKEN}`);
app.use(prerender);

// Routes
app.use('/api', voiceRoute, postRoute, commentRoute, subscriptionRoute, likeRoute);

app.get('/', (req, res) => {
  res.json("hello");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// WebSocket setup with Socket.IO
const io = new Server(server, {
    cors: {
      origin: "https://tech-talks-blog.com", // Sesuaikan dengan domain frontend Anda
      methods: ["GET", "POST"]
    }
  });
  

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
  
    // Listen for 'sendMessage' event from clients
    socket.on("sendMessage", (message) => {
      console.log("Received message:", message);
      // Emit the message to all connected clients
      io.emit("receiveMessage", message); // Pastikan menggunakan `io.emit` untuk menyiarkan ke semua klien
    });
  
    // Handle user disconnect
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
  