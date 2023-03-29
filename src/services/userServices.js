import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";

async function create({ name, email, password, type }) {
  const { rowCount } = await userRepositories.findbyEmail(email);

  if (rowCount !== 0) return "E-mail ja cadastrado";

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.create({ name, email, password: hashPassword, type });
}

export default {
  create,
};
