import { Router } from "express";
import userRoutes from "./user.Routes.js";
import doctorRoutes from "./doctor.routes.js";

const routes = Router();

routes.use("/", userRoutes);
routes.use("/doctors", doctorRoutes);

export default routes;
