import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import Post from "./models/post.model.js"; // Ubah path ini sesuai struktur proyek Anda
import connectDB from "./config/dbConfig.js";

import postRoute from './routes/post.route.js';
import commentRoute from './routes/comment.route.js';
import subscriptionRoute from './routes/subscription.route.js';
import likeRoute from "./routes/like.route.js";

// Load environment variables from .env file
config();

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

// Controller functions



// Routes
app.use('/api',postRoute,commentRoute,subscriptionRoute,likeRoute)

app.get('/',(req,res)=>{
    res.json("hello");
})


// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
