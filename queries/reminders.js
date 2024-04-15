const db = require("../db/dbConfig");

const findReminders = async (id) => {
  console.log("id", id);
  try {
    const reminders = await db.any(
      "SELECT * FROM reminders WHERE user_id = $1 AND reminder_time BETWEEN NOW() AND (NOW() + INTERVAL '2 minutes')",
      [id]
    );

    return reminders;
  } catch (error) {
    throw error;
  }
};

const findAllReminders = async (id) => {
  try {
    const reminders = await db.any(
      "SELECT * FROM reminders WHERE user_id = $1",
      [id]
    );

    return reminders;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findReminders,
  findAllReminders,
};
