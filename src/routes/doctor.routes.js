import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";

const doctorRoutes = Router();

doctorRoutes.get("/", doctorControllers.findAllDoctors);
doctorRoutes.get("/:name", doctorControllers.findDoctorByName);
doctorRoutes.get("/:specialty", doctorControllers.findDoctorBySpecialty);
doctorRoutes.post("/", doctorControllers.createDoctor);

export default doctorRoutes;
