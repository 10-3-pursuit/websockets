const pgp = require("pg-promise")();
require("dotenv").config();

// for local db
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

// for deployment using ElephantSQL comment the cn variable above out and comment the cn variable below in
// const cn = process.env.CONNECTION_STRING;

let db = pgp(cn);

db.connect()
  .then((obj) => {
    obj.client
      .query("SET TIME ZONE 'UTC';")
      .then(() => {
        console.log("Time zone set to UTC for this session.");
        obj.done(); // Releasing the connection back to the pool
      })
      .catch((error) => {
        console.error("Error setting time zone to UTC:", error);
        obj.done(); // Releasing the connection back to the pool if there's an error
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

module.exports = db;
