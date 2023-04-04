import appointmentServices from "../services/appointmentServices.js";

async function createAppointment(req, res, next) {
  const { doctorId, date, hour } = req.body;
  const userId = res.locals.user.id;
  const type = res.locals.user.type;

  try {
    await appointmentServices.createAppointment(
      userId,
      doctorId,
      date,
      hour,
      type
    );

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
async function getAppointmentHistory(req, res, next) {
  const { userId } = req.params;
  try {
    const appointments = await appointmentServices.getAppointmentHistory(
      userId
    );
    res.status(200).json(appointments);
  } catch (error) {
    next(error);
  }
}
export default {
  createAppointment,
  statusAppointment,
};
