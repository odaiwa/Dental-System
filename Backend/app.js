global.config = global.process.env.NODE_ENV === "production" ? require("./config-prod.json") : require("./config-dev.json");
require("./data-access-layer/dal");
const express = require("express");
const cors = require("cors");
// const expressFileUpload = require("express-fileupload");
const authController = require("./controllers/auth-controller");
/*
const productsController = require("./controllers-layer/products-controller");
const itemsController = require("./controllers-layer/items-controller");
const cartController = require("./controllers-layer/cart-controller");
const orderController = require("./controllers-layer/order-controller");
const CategoriesController = require("./controllers-layer/categories-controller");
*/
const server = express();

//server.use(expressFileUpload());
server.use(cors());
server.use(express.json());
server.use("/api/auth", authController);
/*
server.use("/api/products", productsController);
server.use("/api/categories", CategoriesController);
server.use("/api/items", itemsController);
server.use("/api/carts", cartController);
server.use("/api/orders", orderController);
*/
server.use("*", (req, res) => res.status(404).send("Route not found"));


const port = process.env.PORT || 3001; //process.env.PORT === Some production port || 3001 === localhost port
const listener = server.listen(port, () => console.log(`Listening to ${port}...`));


