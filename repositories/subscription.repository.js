// repositories/subscription.repository.js
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (subscriptionData) => {
    const subscription = new Subscription(subscriptionData);
    return await subscription.save();
};
