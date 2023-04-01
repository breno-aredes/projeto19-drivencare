import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import jwt from "jsonwebtoken";

async function signup({ name, email, password, confirmPassword, type }) {
  const { rowCount } = await userRepositories.findbyEmail(email);

  if (password !== confirmPassword) throw new Error(`Passwords do not match`); //400

  if (rowCount) throw new Error(`E-mail already registered`); //409

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.signup({ name, email, password: hashPassword, type });
}

async function signin({ email, password }) {
  const {
    rowCount,
    rows: [user],
  } = await userRepositories.findbyEmail(email);

  if (!rowCount) throw new Error(`Incorrect e-mail or password`);

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) throw new Error(`Incorrect e-mail or password`);

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
}

export default {
  signup,
  signin,
};
