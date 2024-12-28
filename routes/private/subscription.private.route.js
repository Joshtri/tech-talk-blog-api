import express from "express";
import {subscriptionPrivateController} from "../../controllers/subscription/index.js";

const subscriptionCmsRoute = express.Router();

// Rute untuk mengambil semua subscription
subscriptionCmsRoute.get("/subscription", subscriptionPrivateController.getAllSubscriptions);

// Rute untuk mendapatkan total subscription
subscriptionCmsRoute.get("/subscription-total", subscriptionPrivateController.getTotalSubscriptions);

export default subscriptionCmsRoute;
