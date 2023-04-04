import joi from "joi";

export const appointmentSchema = joi.object({
  userId: joi.number().required(),
  doctorId: joi.number().required(),
  date: joi.date().iso().required(),
  hour: joi
    .string()
    .valid(
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00"
    )
    .required(),
});

export const appointmentStatusSchema = joi.object({
  status: joi.string().valid("confirmed", "canceled"),
});
