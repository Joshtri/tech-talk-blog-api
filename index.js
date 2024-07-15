import express from "express";
import cors from 'cors';
import { config } from "dotenv";
import Post from "./models/post.model.js"; // Ubah path ini sesuai struktur proyek Anda
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

// Controller functions
const getPost = async (req, res) => {
    try {
        const postData = await Post.find();
        res.json(postData);
    } catch (error) {
        throw error;
        // res.status(500).json({ message: error.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

app.get('/',(req,res)=>{
    res.json("hello");
})

// Routes
app.get('/api/post', getPost);
app.get('/api/post/:id', getPostById);

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
