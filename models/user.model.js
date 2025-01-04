import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// Define the schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin"],
        required: true,
        default: "admin", // Default role is 'admin'
    },
});

// Method to generate JWT token
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, role: this.role },
        process.env.JWTPRIVATEKEY,
        { expiresIn: "7d" }
    );
    return token;
};

// Define the User model
const User = mongoose.model("User", userSchema);

export default User;
