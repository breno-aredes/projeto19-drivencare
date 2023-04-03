import { Router } from "express";
import appointmentControllers from "../controllers/appointmentControllers.js";

const appointmentRoutes = Router();

appointmentRoutes.post("/", appointmentControllers.createAppointment);

export default appointmentRoutes;
