const controller = require("./controllers");
const router = require("express").Router();

router.get("/moviePreviews", controller.moviePreviews.get);

module.exports = router;
