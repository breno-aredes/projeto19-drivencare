import userServices from "../services/userServices.js";

async function signup(req, res) {
  const { name, email, password, confirmPassword, type } = req.body;

  try {
    await userServices.signup({ name, email, password, confirmPassword, type });
    return res.sendStatus(201);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function signin(req, res) {
  const { email, password } = req.body;

  try {
    const token = await userServices.signin({ email, password });
    return res.send({ token });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export default {
  signup,
  signin,
};
