const controller = require("./controllers");
const router = require("express").Router();

router.get("/movie", controller.movie.get);

module.exports = router;
