import db from "../config/database.js";

async function findAllDoctors() {
  return await db.query(`SELECT * FROM doctors;`);
}

export default {
  findAllDoctors,
};
