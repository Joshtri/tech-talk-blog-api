// server.js

import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import prerender from 'prerender-node';
import connectDB from "./config/dbConfig.js";
import { Server } from "socket.io";
import http from 'http'; // Untuk membuat server HTTP

// Import route dan middleware lainnya
import postRoute from './routes/post.route.js';
import commentRoute from './routes/comment.route.js';
import subscriptionRoute from './routes/subscription.route.js';
import likeRoute from "./routes/like.route.js";
import voiceRoute from "./routes/voice.route.js";

// Load environment variables from .env file
config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: 'https://tech-talks-blog.com', // Asal permintaan klien Anda
  methods: ["GET", "POST"],
  credentials: true, // Mengizinkan pengiriman kredensial
};

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

// Create HTTP server
const server = http.createServer(app);

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Initialize Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "https://tech-talks-blog.com", // Asal permintaan klien Anda
    methods: ["GET", "POST"],
    credentials: true, // Mengizinkan pengiriman kredensial
  },
});

// Manually set headers to include 'Access-Control-Allow-Credentials: true'
io.engine.on("headers", (headers, request) => {
  headers["Access-Control-Allow-Credentials"] = "true";
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen for 'sendMessage' event from clients
  socket.on("sendMessage", (message) => {
    console.log("Received message:", message);
    // Emit the message to all connected clients
    io.emit("receiveMessage", message);
  });

  // Handle user disconnect
  socket.on("disconnect", (reason) => {
    console.log(`User disconnected (${socket.id}): ${reason}`);
  });

  // Handle errors
  socket.on("error", (error) => {
    console.error(`Socket error (${socket.id}):`, error);
  });
});
