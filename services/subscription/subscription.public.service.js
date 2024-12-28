// services/subscription.service.js
import { validateSubscriptionInput } from "../../validations/subscription.validation.js";
// import { createSubscription } from "../../repositories/subscription/subscription.repository.js";


import {subscriptionPublicRepository} from '../../repositories/subscription/index.js'

const postSubscriptionService = async (data) => {
    // Validasi input
    const { isValid, errors } = validateSubscriptionInput(data);
    if (!isValid) {
        const errorMessages = Object.values(errors).join(", ");
        throw new Error(errorMessages);
    }

    // Buat subscription baru
    return await subscriptionPublicRepository.createSubscription(data);
};

export default{
    postSubscriptionService
}