import express from "express";
import postCmsRoute from "./post.private.route.js"; // Import post CMS routes
import subscriptionCmsRoute from "./subscription.private.route.js"; // Import subscription CMS routes
import authRoute from "./auth.private.route.js";
import maintenancePrivateRoute from "./maintenance.private.route.js";

const privateRoutes = express.Router();

// Gabungkan semua route private (CMS)
privateRoutes.use("/", postCmsRoute); // Semua rute di post CMS akan menggunakan prefix /post
privateRoutes.use("/", subscriptionCmsRoute); // Semua rute di subscription CMS akan menggunakan prefix /subscription
privateRoutes.use("/auth", authRoute);
privateRoutes.use("/", maintenancePrivateRoute);


export default privateRoutes;
