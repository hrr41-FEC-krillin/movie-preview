const db = require("../database");

module.exports = {
  movie: {
    get: function(callback) {
      db.Preview.find({}, (err, results) => {
        callback(err, results);
      });
    }
  }
  // movie: {
  //   get: function(params, callback) {
  //     db.Preview.find({ movieName: params }, (err, results) => {
  //       callback(err, results);
  //     });
  //   }
  // }
};
