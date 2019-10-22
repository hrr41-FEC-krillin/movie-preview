const express = require("express");
const app = express();
const router = require("./routes/routes.js");
const path = require("path");

app.use(express.static("client/dist/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

module.exports = app;
