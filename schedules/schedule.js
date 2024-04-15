const schedule = require("node-schedule");
const { findReminders } = require("../queries/reminders");
// const fetch = require("node-fetch");

// Function to emit reminders to users

const emitReminders = async (io, userId) => {
  console.log("userid", userId);
  const allReminders = await findReminders(userId);
  console.log("allReminders", allReminders);

  io.emit("remindersDue", allReminders);
};

const scheduleReminders = (io, userId) => {
  console.log("ran scheduleReminders");
  schedule.scheduleJob("*/1 * * * *", () => emitReminders(io, userId));
};

module.exports = { scheduleReminders };
