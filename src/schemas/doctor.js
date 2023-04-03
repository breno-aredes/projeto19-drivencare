import joi from "joi";

export const doctorSchema = joi.object({
  userId: joi.number().required(),
  specialtyId: joi.number().required(),
});
