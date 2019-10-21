const express = require("express");
const app = express();
const db = require("../server/database/index.js");
const router = require("./routes/routes.js");

app.use(express.static("../client/dist/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

module.exports = app;
