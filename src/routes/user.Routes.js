import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import validateSchema from "../middlewares/schemaValidation.js";
import { userSchema } from "../schemas/user.js";

const userRoutes = Router();

userRoutes.post("/signup", validateSchema(userSchema), userControllers.signup);
userRoutes.post("/signin", userControllers.signin);

export default userRoutes;
