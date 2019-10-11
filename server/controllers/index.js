const models = require("../models");

module.exports = {
  moviePreviews: {
    get: function(req, res) {
      models.moviePreviews.get(function(err, results) {
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
      });
    }
  }
};
