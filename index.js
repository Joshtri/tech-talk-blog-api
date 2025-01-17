import express from "express";
import cors from "cors";
import { config } from "dotenv";
// import Post from "./models/post.model.js"; // Ubah path ini sesuai struktur proyek Anda
import connectDB from "./config/dbConfig.js";
import { corsOptions } from "./config/corsConfig.js"; // Import konfigurasi CORS


import { scheduleVoiceDeletion } from "./controllers/voice.controller.js"; // Adjust path as needed

// import postPublicRoute from "./routes/public/post.public.route.js";
// import commentRoute from "./routes/comment.route.js";
// import subscriptionRoute from "./routes/public/subscription.public.route.js";

// import likeRoute from "./routes/like.route.js";
import { loginToFirebase } from "./config/firebaseConfig.js";
import voiceRoute from "./routes/voice.route.js";
// import chatRoute from "./routes/chat.route.js";

// Import routes
import publicRoutes from "./routes/public/index.js";
import privateRoutes from "./routes/private/index.js";

// import postCmsRoute from "./routes/private/post.cms.route.js";

// Load environment variables from .env file
config();




// Login ke Firebase saat server mulai
loginToFirebase().then(() => {
    console.log("Server connected to Firebase");
  }).catch((error) => {
    console.error("Firebase connection failed:", error);
    process.exit(1); // Keluar jika gagal login
  });
  

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3000; // Fallback to port 3000 if PORT is not defined in .env

// CORS configuration (allow all origins for development)
// const corsOptions = {
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allow specific HTTP methods
//     credentials: true
// };
scheduleVoiceDeletion();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());


// Routes for private (CMS) API
app.use("/api/cms", privateRoutes);

// Routes for public API
app.use("/api", publicRoutes);


// app.use('/api/cms', postCmsRoute); // CMS routes

// Routes
app.use("/api", voiceRoute);

app.get("/", (req, res) => {
    res.json("hello");
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
