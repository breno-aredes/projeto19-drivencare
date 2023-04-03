import db from "../config/database.js";

async function findByEmail(email) {
  return await db.query(
    `
    SELECT * FROM users WHERE email=$1;
    `,
    [email]
  );
}

async function signup({ name, email, password, type }) {
  return await db.query(
    `
      INSERT INTO users (name, email, password, type)
      VALUES ($1, $2, $3, $4);
      `,
    [name, email, password, type]
  );
}

async function findUserById(userId) {
  return await db.query(
    `
    SELECT * FROM users WHERE id=$1;
    `,
    [userId]
  );
}

export default {
  findByEmail,
  signup,
  findUserById,
};
