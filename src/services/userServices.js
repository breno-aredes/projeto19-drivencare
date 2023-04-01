import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import jwt from "jsonwebtoken";
import errors from "../errors/index.js";

async function signup({ name, email, password, confirmPassword, type }) {
  const { rowCount } = await userRepositories.findByEmail(email);

  if (password !== confirmPassword)
    throw errors.conflictError(`Passwords do not match`);

  if (rowCount) throw errors.conflictError(`E-mail already registered`);

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.signup({ name, email, password: hashPassword, type });
}

async function signin({ email, password }) {
  const {
    rowCount,
    rows: [user],
  } = await userRepositories.findByEmail(email);

  if (!rowCount) throw errors.conflictError(`Incorrect e-mail or password`);

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    throw errors.conflictError(`Incorrect e-mail or password`);

  const dataUser = {
    id: user.id,
    email: user.email,
    type: user.type,
  };

  const token = jwt.sign(dataUser, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
}

export default {
  signup,
  signin,
};
