import errors from "../errors/index.js";
import appointmentRepositories from "../repositories/appointmentRepositories.js";
import doctorRepositories from "../repositories/doctorRepositories.js";
import userRepositories from "../repositories/userRepositories.js";

async function createAppointment(userId, doctorId, date, hour) {
  const doctor = await doctorRepositories.findDoctorById(doctorId);
  if (!doctor) {
    throw errors.notFoundError();
  }

  const user = await userRepositories.findUserById(userId);
  if (!user) {
    throw errors.notFoundError();
  }

  const specialty = await doctorRepositories.findSpecialtyById(
    doctor.specialtyId
  );
  if (!specialty) {
    throw errors.notFoundError();
  }

  const isTimeAvailable = await appointmentRepositories.checkTimeAvailability(
    doctorId,
    date,
    hour
  );
  if (isTimeAvailable) {
    throw errors.conflictError("Doctor is not available at the chosen time");
  }

  await appointmentRepositories.createAppointment(userId, doctorId, date, hour);
}

export default {
  createAppointment,
};
