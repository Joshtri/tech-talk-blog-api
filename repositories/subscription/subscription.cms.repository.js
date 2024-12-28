import Subscription from '../../models/subscription.model.js';


const getTotalSubscription = async () => {
    try {
        const totalSubscription = await Subscription.countDocuments();
        return totalSubscription;
    } catch (error) {
        throw error;
    }
}

const getAllSubscription = async()=>{
    try {
        const subscriptions = await Subscription.find();
        return subscriptions;
    } catch (error) {
        console.log(`error get all subscription [REPO] : ${error}`);
        throw error;
    }
}

export default{
    getAllSubscription,
    getTotalSubscription
}