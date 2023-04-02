import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";

const doctorRoutes = Router();

doctorRoutes.get("/", doctorControllers.findAllDoctors);

export default doctorRoutes;
