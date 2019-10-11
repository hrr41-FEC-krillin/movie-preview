const controller = require("./controllers");
const router = require("express").Router();

router.get("/moviePreview", controller.moviePreviews.get);

module.exports = router;
