/* eslint-disable no-undef */
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
   
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            // Tambahkan opsi timeout di sini (misalnya, 30 detik)
            // serverSelectionTimeoutMS: 30000,
        });

        console.log(`Database connected. ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;