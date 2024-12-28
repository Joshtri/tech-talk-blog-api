import express from "express";
import postCmsRoute from "./post.cms.route.js"; // Import post CMS routes
import subscriptionCmsRoute from "./subscription.cms.route.js"; // Import subscription CMS routes

const privateRoutes = express.Router();

// Gabungkan semua route private (CMS)
privateRoutes.use("/", postCmsRoute); // Semua rute di post CMS akan menggunakan prefix /post
privateRoutes.use("/subscription", subscriptionCmsRoute); // Semua rute di subscription CMS akan menggunakan prefix /subscription

export default privateRoutes;