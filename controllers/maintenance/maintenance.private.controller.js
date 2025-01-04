import {maintenancePrivateService} from "../../services/maintenance/index.js";

const getMaintenanceStatus = async (req, res) => {
  try {
    const maintenance = await maintenancePrivateService.getMaintenanceStatus();
    res.json(maintenance);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving maintenance status" });
  }
};

const updateMaintenanceStatus = async (req, res) => {
  const { isMaintenance } = req.body;
  try {
    const updatedStatus = await maintenancePrivateService.updateMaintenanceStatus(isMaintenance);
    res.json({ message: "Maintenance status updated", maintenance: updatedStatus });
  } catch (err) {
    res.status(500).json({ message: "Error updating maintenance status" });
  }
};

export default {
  getMaintenanceStatus,
  updateMaintenanceStatus,
};
