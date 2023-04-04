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

async function statusAppointment(req, res, next) {
  const { appointmentId } = req.params;
  const { status } = req.body;

  res.sendStatus(200);
  try {
    await appointmentServices.statusAppointment(appointmentId, status);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export default {
  createAppointment,
  statusAppointment,
};
