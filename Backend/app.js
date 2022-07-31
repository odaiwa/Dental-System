global.config = global.process.env.NODE_ENV === "production" ? require("./config-prod.json") : require("./config-dev.json");
require("./data-access-layer/dal");
const express = require("express");
const cors = require("cors");
 
const authController = require("./controllers/auth-controller");
const userController = require("./controllers/users-controller");
const roomsController = require("./controllers/rooms-controller");

const server = express();

//server.use(expressFileUpload());
server.use(cors());
server.use(express.json());
server.use("/api/auth", authController);
server.use("/api/users", userController);
server.use("/api/rooms", roomsController);

server.use("*", (req, res) => res.status(404).send("Route not found"));


const port = process.env.PORT || 3001; //process.env.PORT === Some production port || 3001 === localhost port
const listener = server.listen(port, () => console.log(`Listening to ${port}...`));


