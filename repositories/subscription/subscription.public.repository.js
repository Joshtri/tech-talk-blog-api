// repositories/subscription.repository.js
import Subscription from "../../models/subscription.model.js";

const createSubscription = async (subscriptionData) => {
    const subscription = new Subscription(subscriptionData);
    return await subscription.save();
};


export default {
    createSubscription
};