import uploadVoice from '../utils/uploadVoiceMessage.js'; // Adjust the import path as necessary
import Voice from '../models/voice.model.js'; // Adjust the import path as necessary
import cron from 'node-cron';

export async function handleUploadVoice(req, res) {
  try {
    const file = req.file; // Assuming you're using something like multer for file handling
    const voiceUrl = await uploadVoice(file);

    const newVoice = new Voice({
      voiceUrl: voiceUrl,
      timestamp: new Date() // This is optional since it defaults to Date.now()
    });

    const savedVoice = await newVoice.save();

    res.status(201).send({
      status:"success",
      message: "Voice message uploaded and saved successfully.",
      data: savedVoice
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to upload voice message.",
      error: error.message
    });
  }
}


export const getVoice = async (req, res) => {
  try {
    // Ensure you await the database query
    const voiceData = await Voice.find();

    res.status(200).send({
      status: "success",
      message: "Voice messages successfully fetched.",
      data: voiceData
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to fetch voice messages.",
      error: error.message
    });
  }
};


// Schedule a job to run every 24 hours
cron.schedule('0 0 * * *', async () => {
  try {
    // Get the current date
    const now = new Date();

    // Calculate the date 24 hours ago
    const cutoffDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    // Delete all voice messages older than 24 hours
    const deletedVoices = await Voice.deleteMany({ timestamp: { $lt: cutoffDate } });

    console.log(`Deleted ${deletedVoices.deletedCount} voice message(s) older than 24 hours.`);
  } catch (error) {
    console.error('Error deleting old voice messages:', error);
  }
});

export const scheduleVoiceDeletion = () => {
  console.log('Voice deletion job scheduled to run every 24 hours.');
};
