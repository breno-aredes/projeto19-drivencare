import appointmentServices from "../services/appointmentServices.js";

async function createAppointment(req, res, next) {
  const { userId, doctorId, date, hour } = req.body;
  try {
    await appointmentServices.createAppointment(userId, doctorId, date, hour);

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

export default {
  createAppointment,
};
