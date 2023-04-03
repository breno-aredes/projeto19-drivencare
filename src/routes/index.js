import { Router } from "express";
import userRoutes from "./user.Routes.js";
import doctorRoutes from "./doctor.routes.js";
import appointmentRoutes from "./appointments.routes.js";

const routes = Router();

routes.use("/", userRoutes);
routes.use("/doctors", doctorRoutes);
routes.use("/appointment", appointmentRoutes);

export default routes;
