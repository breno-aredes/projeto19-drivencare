import doctorServices from "../services/doctorServices.js";

async function findAllDoctors(req, res, next) {
  try {
    const doctors = await doctorServices.findAllDoctors();

    return res.send({ doctors });
  } catch (error) {
    next(error);
  }
}

async function findDoctorByName(req, res, next) {
  const { name } = req.params;
  try {
    const doctor = await doctorServices.findDoctorByName(name);

    return res.send({ doctor });
  } catch (error) {
    next(error);
  }
}

async function findDoctorBySpecialty(req, res, next) {
  const { specialty } = req.params;
  try {
    const doctor = await doctorServices.findDoctorBySpecialty(specialty);

    return res.send({ doctor });
  } catch (error) {
    next(error);
  }
}

async function createDoctor(req, res, next) {
  const { userId, specialtyId } = req.body;

  try {
    await doctorServices.createDoctor(userId, specialtyId);
    res.status(201).send("created");
  } catch (error) {
    next(error);
  }
}

export default {
  findAllDoctors,
  findDoctorByName,
  findDoctorBySpecialty,
  createDoctor,
};
