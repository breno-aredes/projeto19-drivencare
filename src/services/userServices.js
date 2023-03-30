import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";

async function create({ name, email, password, confirmPassword, type }) {
  const { rowCount } = await userRepositories.findbyEmail(email);

  if (password !== confirmPassword) throw new Error(`Passwords do not match`); //400

  if (rowCount) throw new Error(`E-mail already registered`); //409

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.create({ name, email, password: hashPassword, type });
}

export default {
  create,
};
