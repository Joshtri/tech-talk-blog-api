import Subscription from "../models/subscription.model.js";

// Controller function to post a new comment
export const postSubscription = async (req, res) => {
    try {
        const { email_subscription, whats_app_subscription } = req.body;

        // Create a new comment
        const newSubscription = new Subscription({
            email_subscription,
            whats_app_subscription,
            
        });

        // Save the new comment to the database
        const savedSubscription = await newSubscription.save();

        // Send a success response
        res.status(201).json(savedSubscription);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};