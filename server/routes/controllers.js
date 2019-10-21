const models = require("../database/models.js");

module.exports = {
  movie: {
    get: async (req, res) => {
      let params = req.query.title;
      let result = await models.movie.get(params);
      if (!result) {
        res.send("Movie not found");
      } else {
        res.json(result);
      }
    }
  }
};
