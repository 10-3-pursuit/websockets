// DEPENDENCIES
const app = require("./app.js");
const socketIo = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = socketIo(server); // This is the crucial part for socket.io

const authController = require("./controllers/authController");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT || 3003;
console.log("calling auth server");
app.use("/api/auth", authController(io));
// LISTEN
server.listen(PORT, () => {
  console.log(`💻 Listening on port ${PORT} 🔖`);
});
