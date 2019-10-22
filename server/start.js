require("dotenv").config();
const express = require("express");
const app = require("./index.js");

let port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
