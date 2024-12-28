// controllers/subscription.controller.js
// import { postSubscriptionService } from "../../services/subscription.service.js";
import {subscriptionPublicService} from '../../services/subscription/index.js'

const postSubscription = async (req, res) => {
    try {
        const { email_subscription, whats_app_subscription } = req.body;

        // Panggil service untuk membuat subscription baru
        const savedSubscription = await subscriptionPublicService.postSubscriptionService({ email_subscription, whats_app_subscription });

        res.status(201).json(savedSubscription);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export default{
    postSubscription
}