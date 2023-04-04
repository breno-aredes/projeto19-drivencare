import db from "../config/database.js";

async function createAppointment(userId, doctorId, date, hour) {
  const status = "pending";

  await db.query(
    `
    INSERT INTO appointments 
    ("doctorId", "patientId", "date", "hour", "status") 
    VALUES ($1, $2, $3, $4, $5)`,
    [doctorId, userId, date, hour, status]
  );
}
//formato dos dados passados no thunderClient para createAppointment
//   {
//     "userId": 1,
//     "doctorId": 3,
//     "date": "2023-04-04",
//     "hour": "14:00"
//   }

async function checkTimeAvailability(doctorId, date, hour) {
  const { rowCount } = await db.query(
    `
    SELECT * FROM appointments 
    WHERE "doctorId" = $1 AND "date" = $2 AND "hour" = $3`,
    [doctorId, date, hour]
  );

  return rowCount;
}

async function findAppointmentById(appointmentId) {
  return await db.query(
    `
    SELECT * FROM appointments WHERE id=$1;
    `,
    [appointmentId]
  );
}

async function statusAppointment(appointmentId, status) {
  return await db.query(
    `
    UPDATE appointments SET status=$1 WHERE id=$2;
    `,
    [status, appointmentId]
  );
}

export default {
  createAppointment,
  checkTimeAvailability,
  findAppointmentById,
  statusAppointment,
};
