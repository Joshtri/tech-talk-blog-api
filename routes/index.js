import express from "express";
import privateRoutes from "./private/index.js"; // Import routes untuk CMS/private
import publicRoutes from "./public/index.js"; // Import routes untuk public

const router = express.Router();

// Rute private (CMS)
router.use("/cms", privateRoutes);

// Rute public
router.use("/", publicRoutes);

export default router;
