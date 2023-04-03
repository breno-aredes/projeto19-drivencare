import errors from "../errors/index.js";
import appointmentRepositories from "../repositories/appointmentRepositories.js";
import doctorRepositories from "../repositories/doctorRepositories.js";
import userRepositories from "../repositories/userRepositories.js";

async function createAppointment(userId, doctorId, date, hour) {
  const doctor = await doctorRepositories.findDoctorById(doctorId);
  if (!doctor.rowCount) {
    throw errors.conflictError(`Doctor not found`);
  }

  const user = await userRepositories.findUserById(userId);
  if (!user.rowCount) {
    throw errors.conflictError(`User not found`);
  }

  const specialty = await doctorRepositories.findSpecialtyById(
    doctor.rows[0].specialtyId
  );
  if (!specialty.rowCount) {
    throw errors.conflictError(`specialty does not exist`);
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
