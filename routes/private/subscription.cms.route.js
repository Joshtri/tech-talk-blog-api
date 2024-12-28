import express from "express";
import subscriptionCmsController from "../../controllers/subscription/subscription.cms.controller.js";

const subscriptionCmsRoute = express.Router();

// Rute untuk mengambil semua subscription
subscriptionCmsRoute.get("/subscription", subscriptionCmsController.getAllSubscriptions);

// Rute untuk mendapatkan total subscription
subscriptionCmsRoute.get("/subscription-total", subscriptionCmsController.getTotalSubscriptions);

export default subscriptionCmsRoute;
