const express = require("express");
const app = require("./index.js");
let port = 3050;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
