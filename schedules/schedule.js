const schedule = require("node-schedule");
const { findReminders } = require("../queries/reminders");
// const fetch = require("node-fetch");

// Function to emit reminders to users

const emitReminders = async (io) => {
  const allReminders = await findReminders(1);
  console.log("allReminders", allReminders);

  io.emit("remindersDue", allReminders);
};

const scheduleReminders = (io) => {
  console.log("ran scheduleReminders");
  schedule.scheduleJob("*/1 * * * *", () => emitReminders(io));
};

const scheduleCrypto = (io) => {
  console.log("ran scheduleCrypto");
  schedule.scheduleJob("*/1 * * * *", () => cryptoUpdaters(io));
};
module.exports = { scheduleReminders, scheduleCrypto };
