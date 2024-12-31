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


export default {
  getAllSubscriptions,
  getTotalSubscriptions,
  sharePostToSubscriptions
};
