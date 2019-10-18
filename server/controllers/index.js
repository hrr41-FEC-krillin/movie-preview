const models = require("../models");

module.exports = {
  movie: {
    // get: function(req, res) {
    //   let params = req.query.title;
    //   models.movie.get(params, function(err, results) {
    //     if (err) {
    //       throw err;
    //     } else {
    //       res.json(results);
    //     }
    //   });
    // },
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
