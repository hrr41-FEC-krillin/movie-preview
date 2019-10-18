const controller = require("./controllers");
const router = require("express").Router();

//5:37 change /movie to /movie/title
router.get("/movie", controller.movie.get);

// router.get("/movie", controller.movie.get);

module.exports = router;
