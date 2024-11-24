// validations/subscription.validation.js

export const validateSubscriptionInput = (data) => {
    const errors = {};

    if (!data.email_subscription && !data.whats_app_subscription) {
        errors.subscription = "At least one subscription method (email or WhatsApp) is required.";
    }

    if (data.email_subscription && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email_subscription)) {
        errors.email_subscription = "Invalid email format.";
    }

    if (data.whats_app_subscription && !/^\d+$/.test(data.whats_app_subscription)) {
        errors.whats_app_subscription = "WhatsApp number must contain only digits.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
