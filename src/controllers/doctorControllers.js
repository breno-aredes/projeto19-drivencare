import doctorServices from "../services/doctorServices.js";

async function findAllDoctors(req, res, next) {
  try {
    const doctors = await doctorServices.findAllDoctors();

    return res.send({ doctors });
  } catch (error) {
    next(error);
  }
}

export default {
  findAllDoctors,
};
