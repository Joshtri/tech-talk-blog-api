import express from "express";
import subscriptionPublicRoute from "./subscription.public.route.js";
import postPublicRoute from "./post.public.route.js";
import likePublicRoute from "./like.public.route.js";
import commentPublicRoute from "./comment.public.route.js";
import chatPublicRoute from "./chat.public.route.js";

const publicRoutes = express.Router();

// Gabungkan semua route di public
publicRoutes.use("/", subscriptionPublicRoute); // Subscription routes
publicRoutes.use("/", postPublicRoute); // Post routes
publicRoutes.use("/", likePublicRoute);
publicRoutes.use("/", commentPublicRoute);
publicRoutes.use("/", chatPublicRoute);


export default publicRoutes;
