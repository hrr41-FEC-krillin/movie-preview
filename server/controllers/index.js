const models = require("../models");

module.exports = {
  // movie: {
  //   get: function(req, res) {
  //     console.log("query req from moviepreview get", req.query);
  //     models.movie.get(function(err, results) {
  //       if (err) {
  //         throw err;
  //       } else {
  //         res.json(results);
  //       }
  //     });
  //   }
  // }
  movie: {
    get: function(req, res) {
      console.log("query req from movie get", req.query);
      let params = req.query.title;
      models.movie.get(params, function(err, results) {
        if (err) {
          throw err;
        } else {
          res.json(results);
        }
      });
    }
  }
};
