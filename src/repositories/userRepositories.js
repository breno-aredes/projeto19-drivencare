import db from "../config/database.js";

async function findbyEmail(email) {
  return await db.query(
    `
    SELECT * FROM users WHERE email=$1;
    `,
    [email]
  );
}

async function create({ name, email, password, type }) {
  return await db.query(
    `
    INSERT INTO users (name, email, password, type)
    VALUES ($1, $2, $3, $4);
    `,
    [name, email, password, type]
  );
}

export default {
  findbyEmail,
  create,
};
