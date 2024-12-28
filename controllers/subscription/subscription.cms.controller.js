import subscriptionCmsService from "../../services/subscription/subscription.cms.service.js";

const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await subscriptionCmsService.getAllSubscriptions();
    res.status(200).json({ success: true, data: subscriptions });
  } catch (error) {
    console.error(`Error in getAllSubscriptions [CONTROLLER]: ${error}`);
    res.status(500).json({ success: false, message: "Failed to fetch subscriptions" });
  }
};

const getTotalSubscriptions = async (req, res) => {
  try {
    const total = await subscriptionCmsService.getTotalSubscriptions();
    res.status(200).json({ success: true, total });
  } catch (error) {
    console.error(`Error in getTotalSubscriptions [CONTROLLER]: ${error}`);
    res.status(500).json({ success: false, message: "Failed to fetch total subscriptions" });
  }
};

export default {
  getAllSubscriptions,
  getTotalSubscriptions,
};
