import { subscriptionPrivateRepository } from "../../repositories/subscription/index.js";

const getAllSubscriptions = async () => {
  try {
    const subscriptions = await subscriptionPrivateRepository.getAllSubscription();
    return subscriptions;
  } catch (error) {
    console.error(`Error in getAllSubscriptions [SERVICE]: ${error}`);
    throw error;
  }
};

const getSubscriptionByIdForCMS = async (id) => {
  return await subscriptionPrivateRepository.findSubscriptionById(id);
};


const getTotalSubscriptions = async () => {
  try {
    const totalSubscriptions = await subscriptionPrivateRepository.getTotalSubscription();
    return totalSubscriptions;
  } catch (error) {
    console.error(`Error in getTotalSubscriptions [SERVICE]: ${error}`);
    throw error;
  }
};

const updateExistingSubscription = async (id, postData) => {
  return await subscriptionPrivateRepository.updateSubscription(id, postData);
};

const deleteSubscriptionById = async (id) => {
  return await subscriptionPrivateRepository.deleteSubscription(id);
};

const createSubscription = async(subscriptionData)=>{
  return await subscriptionPrivateRepository.createSubscription(subscriptionData);
};


export default {
  getAllSubscriptions,
  getTotalSubscriptions,
  updateExistingSubscription,
  deleteSubscriptionById,
  getSubscriptionByIdForCMS,
  createSubscription
};
