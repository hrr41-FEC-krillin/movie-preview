const express = require("express");
const app = express();
const router = require("./routes/routes.js");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.static("client/dist/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);

module.exports = app;
