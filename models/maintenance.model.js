// models/Maintenance.js
import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema({
  isMaintenance: {
    type: Boolean,
    default: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);
export default Maintenance;
