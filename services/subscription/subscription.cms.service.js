import { subscriptionCmsRepository } from "../../repositories/subscription/index.js";

const getAllSubscriptions = async () => {
  try {
    const subscriptions = await subscriptionCmsRepository.getAllSubscription();
    return subscriptions;
  } catch (error) {
    console.error(`Error in getAllSubscriptions [SERVICE]: ${error}`);
    throw error;
  }
};

const getTotalSubscriptions = async () => {
  try {
    const totalSubscriptions = await subscriptionCmsRepository.getTotalSubscription();
    return totalSubscriptions;
  } catch (error) {
    console.error(`Error in getTotalSubscriptions [SERVICE]: ${error}`);
    throw error;
  }
};

export default {
  getAllSubscriptions,
  getTotalSubscriptions,
};
