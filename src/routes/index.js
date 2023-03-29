import { Router } from "express";
import userRoutes from "./user.Routes.js";

const routes = Router();

routes.use("/users", userRoutes);

export default routes;
