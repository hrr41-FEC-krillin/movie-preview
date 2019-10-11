const db = require("../database");

module.exports = {
  moviePreviews: {
    get: function(callback) {
      // let queryStr = "Preview.find()";
      db.Preview.find({}, (err, results) => {
        callback(err, results);
      });
    }
  }
};
