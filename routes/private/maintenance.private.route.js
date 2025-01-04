import express from "express";
import {maintenancePrivateController} from "../../controllers/maintenance/index.js";

const maintenancePrivateRoute = express.Router();

// Route untuk mendapatkan status maintenance
maintenancePrivateRoute.get("/maintenance", maintenancePrivateController.getMaintenanceStatus);

// Route untuk memperbarui status maintenance
maintenancePrivateRoute.put("/maintenance", maintenancePrivateController.updateMaintenanceStatus);

export default maintenancePrivateRoute;
