const db = require("./index.js");

module.exports = {
  movie: {
    get: async params => {
      let data = await db.Preview.findOne({ title: params });
      if (!data) {
        throw new Error("Movie not found");
      }
      return data;
    }
  }
};
