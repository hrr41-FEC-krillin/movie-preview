const express = require("express");
const app = express();
// const port = 3000;
const db = require("../server/database/index.js");
const router = require("./routes.js");
// const start = require("./start.js");

app.use(express.static("../client/dist/"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/api", router);

module.exports = app;

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });
