const db = require("../database");

module.exports = {
  movie: {
    // get: function(params, callback) {
    //   db.Preview.findOne({ title: params }, (err, results) => {
    //     callback(err, results);
    //   });
    // },
    get: async params => {
      let data = await db.Preview.findOne({ title: params });
      if (!data) {
        throw new Error("Movie not found");
      }
      return data;
    }
  }
};
