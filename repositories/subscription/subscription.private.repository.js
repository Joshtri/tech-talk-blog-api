import Subscription from "../../models/subscription.model.js";


const getTotalSubscription = async () => {
    try {
        const totalSubscription = await Subscription.countDocuments();
        return totalSubscription;
    } catch (error) {
        console.log(`error get total subscription [REPO] : ${error}`);

        throw error;
    }
};

// Get a subscription by its ID
const findSubscriptionById = async (id) => {
    return await Subscription.findById(id);
};

const createSubscription = async(subscriptionData)=>{
    return await Subscription.create(subscriptionData);
};
  

const getAllSubscription = async()=>{
    try {
        const subscriptions = await Subscription.find();
        return subscriptions;
    } catch (error) {
        console.log(`error get all subscription [REPO] : ${error}`);
        throw error;
    }
};

// Update an existing subscription.
const updateSubscription = async (id, postData) => {
    return await Subscription.findByIdAndUpdate(id, postData, { new: true });
};

const deleteSubscription = async(id) =>{
    return await Subscription.findByIdAndDelete(id);
};
  

export default {
    getAllSubscription,
    getTotalSubscription,
    createSubscription,
    updateSubscription,
    deleteSubscription,
    findSubscriptionById
};