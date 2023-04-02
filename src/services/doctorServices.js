import errors from "../errors/index.js";
import doctorRepositories from "../repositories/doctorRepositories.js";

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

export default {
  findAllDoctors,
  findDoctorByName,
  findDoctorBySpecialty,
};
