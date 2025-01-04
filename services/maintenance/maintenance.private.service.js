import {maintenancePrivateRepository} from "../../repositories/maintenance/index.js";

const getMaintenanceStatus = async () => {
  return await maintenancePrivateRepository.getMaintenanceStatus() || { isMaintenance: false };
};

const updateMaintenanceStatus = async (isMaintenance) => {
  return await maintenancePrivateRepository.updateMaintenanceStatus(isMaintenance);
};

export default {
  getMaintenanceStatus,
  updateMaintenanceStatus,
};
