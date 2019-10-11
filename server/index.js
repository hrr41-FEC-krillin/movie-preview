const express = require("express");
const app = express();
const port = 3000;
const db = require("../server/database/index.js");
const router = require("./routes.js");
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Heyyyyy");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports.app = app;
