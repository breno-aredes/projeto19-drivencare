import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { doctorSchema } from "../schemas/doctor.js";

const doctorRoutes = Router();

doctorRoutes.get("/", doctorControllers.findAllDoctors);
doctorRoutes.get(
  "/specialty/:specialty",
  doctorControllers.findDoctorBySpecialty
);
doctorRoutes.get("/name/:name", doctorControllers.findDoctorByName);

doctorRoutes.post(
  "/",
  validateSchema(doctorSchema),
  doctorControllers.createDoctor
);

export default doctorRoutes;
