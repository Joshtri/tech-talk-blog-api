import subscriptionPrivateService from "../../services/subscription/subscription.private.service.js";

import Subscription from "../../models/subscription.model.js";
import { sendEmail, sendWhatsAppMessage } from "../../utils/notificationUtils.js";

const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await subscriptionPrivateService.getAllSubscriptions();
    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    console.error(`Error in getAllSubscriptions [CONTROLLER]: ${error}`);
    res.status(500).json({ success: false, message: "Failed to fetch subscriptions" });
  }
};

const getTotalSubscriptions = async (req, res) => {
  try {
    const total = await subscriptionPrivateService.getTotalSubscriptions();
    res.status(200).json({ success: true, total });
  } catch (error) {
    console.error(`Error in getTotalSubscriptions [CONTROLLER]: ${error}`);
    res.status(500).json({ success: false, message: "Failed to fetch total subscriptions" });
  }
};






const sharePostToSubscriptions = async (req, res) => {
  const { slug, title, link } = req.body;

  try {
    const subscriptions = await Subscription.find();

    // Send email and WhatsApp message to each subscription
    for (const sub of subscriptions) {
      if (sub.email_subscription) {
        sendEmail(sub.email_subscription, title, link);
      }
      if (sub.whats_app_subscription) {
        sendWhatsAppMessage(sub.whats_app_subscription, title, link);
      }
    }

    res.status(200).json({ message: "Post shared to all subscriptions." });
  } catch (error) {
    console.error("Error sharing post:", error);
    res.status(500).json({ error: "Failed to share post." });
  }
};

const updateSubscription = async (req, res) => {
  const { id } = req.params;
  const subscriptionData = req.body;

  try {
    // Handle cover image replacement if a new file is uploaded
    // if (req.file) {
    //   postData.coverImageUrl = await replaceCoverImage(postData.coverImageUrl, req.file);
    // }

    const updatedSubscription = await subscriptionPrivateService.updateExistingSubscription(id, subscriptionData);
    if (!updatedSubscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    console.log(`berhasil update data : ${updatedSubscription}`);
    res.status(200).json(updatedSubscription);
  } catch (error) {
    console.log(`gagal update data ${error}`);
    res.status(500).json({ error: error.message });
  }
};


/**
 * Delete a post by ID
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
const deleteSubscription = async (req, res) => {
  const { id } = req.params;
  try {
    const subscription = await subscriptionPrivateService.getSubscriptionByIdForCMS(id);
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    // if (post.coverImageUrl) {
    //   try {
    //     await deleteFileFromFirebase(post.coverImageUrl);
    //   } catch (fileError) {
    //     console.error("Failed to delete file from Firebase:", fileError.message);
    //   }
    // }

    const deletedSubscription = await subscriptionPrivateService.deleteSubscriptionById(id);
    if (!deletedSubscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    res.status(200).json({ message: "Subscription and associated file deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createSubscription = async (req, res) => {
  try {
    const { email_subscription, whats_app_subscription } = req.body;

    // Validate input
    if (!email_subscription || !whats_app_subscription) {
      return res.status(400).json({ message: "Email and WhatsApp are required." });
    }

    const subscription = await subscriptionPrivateService.createSubscription({
      email_subscription,
      whats_app_subscription,
    });

    res.status(201).json(subscription);
  } catch (error) {
    console.error(`Error creating subscription: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};


export default {
  getAllSubscriptions,
  getTotalSubscriptions,
  sharePostToSubscriptions,
  updateSubscription,
  deleteSubscription,
  createSubscription
};
