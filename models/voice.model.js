import mongoose from "mongoose";

// Definisikan schema untuk voice message
const voiceMessageSchema = new mongoose.Schema({
    voiceUrl: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});


const Voice = mongoose.model('Voice', voiceMessageSchema);

export default Voice;