import express from "express";
import authController from "../../controllers/auth/auth.controller.private.js";

const authRoute = express.Router();

authRoute.post("/signup", authController.signup);
authRoute.post("/login", authController.login);

export default authRoute;
