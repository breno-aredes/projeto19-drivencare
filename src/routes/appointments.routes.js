import { Router } from "express";
import appointmentControllers from "../controllers/appointmentControllers.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { appointementSchema } from "../schemas/appointment.js";

const appointmentRoutes = Router();

appointmentRoutes.post(
  "/",
  validateSchema(appointementSchema),
  appointmentControllers.createAppointment
);

export default appointmentRoutes;
