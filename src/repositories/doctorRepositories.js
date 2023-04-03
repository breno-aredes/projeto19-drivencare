import db from "../config/database.js";

async function findAllDoctors() {
  return await db.query(
    `
  SELECT doctors.id, users.name as doctorName, specialties.name as specialty 
  FROM doctors 
  JOIN users ON doctors."userId" = users.id 
  JOIN specialties ON doctors."specialtyId" = specialties.id
  `
  );
}

async function findDoctorByName(name) {
  const { rows, rowCount } = await db.query(
    `
    SELECT doctors.id, users.name, specialties.name as specialty 
    FROM doctors 
    JOIN users ON doctors."userId" = users.id 
    JOIN specialties ON doctors."specialtyId" = specialties.id 
    WHERE users.name = $1;
    `,
    [name]
  );

  return { rows, rowCount };
}

async function findDoctorBySpecialty(specialty) {
  const { rows, rowCount } = await db.query(
    `
    SELECT doctors.id, users.name, specialties.name as specialty 
    FROM doctors 
    JOIN users ON doctors."userId" = users.id 
    JOIN specialties ON doctors."specialtyId" = specialties.id 
    WHERE specialties.name = $1;
    `,
    [specialty]
  );

  return { rows, rowCount };
}

async function createDoctor(userId, specialtyId) {
  return await db.query(
    `
    INSERT INTO doctors 
    ("userId", "specialtyId") 
    VALUES ($1, $2)
    `,
    [userId, specialtyId]
  );
}

async function findSpecialtyById(specialtyId) {
  const specialty = await db.query(
    `
    SELECT * FROM specialties WHERE id=$1;
    `,
    [specialtyId]
  );

  return specialty;
}

async function findDoctorByUserId(userId) {
  const doctor = await db.query(
    `
  SELECT * FROM doctors WHERE "userId"=$1;
  `,
    [userId]
  );
  return doctor;
}

export default {
  findAllDoctors,
  findDoctorByName,
  findDoctorBySpecialty,
  createDoctor,
  findSpecialtyById,
  findDoctorByUserId,
};
