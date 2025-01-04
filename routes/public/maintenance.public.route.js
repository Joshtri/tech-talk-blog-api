import express from "express";
import {maintenancePrivateController} from "../../controllers/maintenance/index.js";

const maintenancePublicRoute = express.Router();

// Route untuk mendapatkan status maintenance
maintenancePublicRoute.get("/maintenance", maintenancePrivateController.getMaintenanceStatus);

// Route untuk memperbarui status maintenance
// maintenancePublicRoute.put("/maintenance", maintenancePrivateController.updateMaintenanceStatus);

export default maintenancePublicRoute;
