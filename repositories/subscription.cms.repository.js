import Subscription from '../models/subscription.model.js';


export const getTotalSubscription = async () => {
    try {
        const totalSubscription = await Subscription.countDocuments();
        return totalSubscription;
    } catch (error) {
        throw error;
    }
}