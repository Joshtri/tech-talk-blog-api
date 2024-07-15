import express from "express";
import cors from 'cors';
import { config } from "dotenv";

import postRoute from './routes/post.route.js';
import connectDB from "./config/dbConfig.js";

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

// Routes
app.use('/api', postRoute);

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
