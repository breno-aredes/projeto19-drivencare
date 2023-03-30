import joi from "joi";

export const userSchema = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().required(),
  type: joi.string().valid("doctor", "patient").required(),
});
