import express from "express";
import { subscriptionPublicController } from "../../controllers/subscription/index.js"; // Mengimpor dari index.js
const subscriptionPublicRoute = express.Router();

subscriptionPublicRoute.post('/subscription', subscriptionPublicController.postSubscription);

export default subscriptionPublicRoute;