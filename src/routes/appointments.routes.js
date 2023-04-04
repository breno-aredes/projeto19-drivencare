import { Router } from "express";
import appointmentControllers from "../controllers/appointmentControllers.js";
import validateSchema from "../middlewares/schemaValidation.js";
import {
  appointmentSchema,
  appointmentStatusSchema,
} from "../schemas/appointment.js";
import authValidation from "../middlewares/authValidation.js";

const appointmentRoutes = Router();

appointmentRoutes.post(
  "/",
  authValidation.authValidation,
  validateSchema(appointmentSchema),
  appointmentControllers.createAppointment
);
appointmentRoutes.put(
  "/:appointmentId",
  authValidation.authValidation,
  validateSchema(appointmentStatusSchema),
  appointmentControllers.statusAppointment
);
// appointmentRoutes.get("/history", appointmentControllers.appointmentHistory);

export default appointmentRoutes;
