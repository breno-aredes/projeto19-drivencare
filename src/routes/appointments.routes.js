import { Router } from "express";
import appointmentControllers from "../controllers/appointmentControllers.js";
import validateSchema from "../middlewares/schemaValidation.js";
import {
  appointmentSchema,
  appointmentStatusSchema,
} from "../schemas/appointment.js";

const appointmentRoutes = Router();

appointmentRoutes.post(
  "/",
  validateSchema(appointmentSchema),
  appointmentControllers.createAppointment
);
appointmentRoutes.put(
  "/:appointmentId",
  validateSchema(appointmentStatusSchema),
  appointmentControllers.statusAppointment
);

export default appointmentRoutes;
