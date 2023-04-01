import userServices from "../services/userServices.js";

async function signup(req, res, next) {
  const { name, email, password, confirmPassword, type } = req.body;

  try {
    await userServices.signup({ name, email, password, confirmPassword, type });
    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

async function signin(req, res, next) {
  const { email, password } = req.body;

  try {
    const token = await userServices.signin({ email, password });
    return res.send({ token });
  } catch (error) {
    next(error);
  }
}

export default {
  signup,
  signin,
};
