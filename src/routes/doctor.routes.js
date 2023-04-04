import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { doctorSchema } from "../schemas/doctor.js";
import authValidation from "../middlewares/authValidation.js";

const doctorRoutes = Router();

doctorRoutes.get(
  "/",
  authValidation.authValidation,
  doctorControllers.findAllDoctors
);
doctorRoutes.get(
  "/specialty/:specialty",
  authValidation.authValidation,
  doctorControllers.findDoctorBySpecialty
);
doctorRoutes.get(
  "/name/:name",
  authValidation.authValidation,
  doctorControllers.findDoctorByName
);

doctorRoutes.post(
  "/",
  validateSchema(doctorSchema),
  doctorControllers.createDoctor
);

export default doctorRoutes;
