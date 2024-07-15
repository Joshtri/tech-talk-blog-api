import express from "express";
import cors from 'cors';


import postRoute from './routes/post.route.js';
import connectDB from "./config/dbConfig.js";
import { config } from "dotenv";

config();
connectDB();
const app = express();
const PORT = process.env.PORT;



app.use(cors());
app.use(express.json());
app.use('/api',postRoute)



app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
});




