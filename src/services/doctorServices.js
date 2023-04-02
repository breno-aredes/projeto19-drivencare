import errors from "../errors/index.js";
import doctorRepositories from "../repositories/doctorRepositories.js";

async function findAllDoctors() {
  const { rows, rowCount } = await doctorRepositories.findAllDoctors();

  if (!rowCount) throw errors.notFoundError();

  return rows;
}

export default {
  findAllDoctors,
};
