const express = require("express");
const app = express();
const port = 3000;
const db = require("../server/database/index.js");
const router = require("./routes.js");

//change to ../relative path
// ./client/dist
app.use(express.static("/Users/robnolan/HRR41/movie-preview/client/dist/"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
