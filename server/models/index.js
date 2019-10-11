const db = require("../database");

module.exports = {
  moviePreviews: {
    get: function(callback) {
      db.Preview.find({}, (err, results) => {
        callback(err, results);
      });
    }
  }
};
