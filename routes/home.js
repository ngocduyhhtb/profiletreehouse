const express = require("express");
const home_router = express.Router();
const home_controller = require("../controllers/home");

home_router.get("/", home_controller.index);
module.exports = home_router;