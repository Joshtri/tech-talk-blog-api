import express from "express";
import {subscriptionPrivateController} from "../../controllers/subscription/index.js";

const subscriptionCmsRoute = express.Router();

// Rute untuk mengambil semua subscription
subscriptionCmsRoute.get("/subscription", subscriptionPrivateController.getAllSubscriptions);

// Rute untuk mendapatkan total subscription
subscriptionCmsRoute.get("/subscription-total", subscriptionPrivateController.getTotalSubscriptions);

subscriptionCmsRoute.post("/share-post", subscriptionPrivateController.sharePostToSubscriptions);

subscriptionCmsRoute.post("/subscription", subscriptionPrivateController.createSubscription);

subscriptionCmsRoute.put("/subscription/:id", subscriptionPrivateController.updateSubscription);

subscriptionCmsRoute.delete("/subscription/:id", subscriptionPrivateController.deleteSubscription);

export default subscriptionCmsRoute;