import userServices from "../services/userServices.js";

async function create(req, res) {
  const { name, email, password, confirmPassword, type } = req.body;

  try {
    await userServices.create({ name, email, password, confirmPassword, type });

    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export default {
  create,
};
