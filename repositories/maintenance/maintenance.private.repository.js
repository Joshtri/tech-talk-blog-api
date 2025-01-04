import Maintenance from "../../models/maintenance.model.js";

const getMaintenanceStatus = async () => {
  return await Maintenance.findOne();
};

const updateMaintenanceStatus = async (isMaintenance) => {
  let maintenance = await Maintenance.findOne();
  if (!maintenance) {
    maintenance = new Maintenance({ isMaintenance });
  } else {
    maintenance.isMaintenance = isMaintenance;
    maintenance.updatedAt = Date.now();
  }
  return await maintenance.save();
};

export default {
  getMaintenanceStatus,
  updateMaintenanceStatus,
};
