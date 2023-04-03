import errors from "../errors/index.js";
import doctorRepositories from "../repositories/doctorRepositories.js";
import userRepositories from "../repositories/userRepositories.js";

async function findAllDoctors() {
  const { rows, rowCount } = await doctorRepositories.findAllDoctors();

  if (!rowCount) throw errors.notFoundError();

  return rows;
}

async function findDoctorByName(name) {
  const { rows, rowCount } = await doctorRepositories.findDoctorByName(name);

  if (!rowCount) throw errors.notFoundError();

  return rows;
}

async function findDoctorBySpecialty(specialty) {
  const { rows, rowCount } = await doctorRepositories.findDoctorBySpecialty(
    specialty
  );

  if (!rowCount) throw errors.notFoundError();

  return rows;
}

async function createDoctor(userId, specialtyId) {
  const {
    rowCount,
    rows: [user],
  } = await userRepositories.findUserById(userId);

  if (!rowCount) throw errors.conflictError(`User not found`);

  if (user.type !== "doctor") {
    throw errors.conflictError(`user does not have authorization`);
  }

  const specialty = await doctorRepositories.findSpecialtyById(specialtyId);

  if (!specialty.rowCount) {
    throw errors.conflictError(`specialty does not exist`);
  }

  const doctor = await doctorRepositories.findDoctorById(userId);

  if (doctor.rowCount)
    throw errors.conflictError(`doctor already has a specified specialty`);

  return await doctorRepositories.createDoctor(userId, specialtyId);
}

export default {
  findAllDoctors,
  findDoctorByName,
  findDoctorBySpecialty,
  createDoctor,
};
