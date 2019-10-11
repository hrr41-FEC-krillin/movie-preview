const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

mongoose.connect("mongodb://localhost:27017");

autoIncrement.initialize(mongoose);

let previewSchema = mongoose.Schema({
  movieName: String,
  criticConsensus: String,
  potatoMeter: {
    percentage: Number,
    averageRating: Number,
    totalCount: Number,
    fresh: Number,
    spoiled: Number
  },
  audienceScore: {
    percentage: Number,
    averageRating: Number,
    totalCount: Number
  },
  videoUrl: String,
  imgUrl: String
});

previewSchema.plugin(autoIncrement.plugin, "Preview");

let Preview = mongoose.model("Preview", previewSchema);

let save = movies => {
  movies.forEach(movie => {
    let moviePreview = new Preview({
      movieName: movie.movieName,
      criticConsensus: movie.criticConsensus,
      potatoMeter: {
        percentage: movie.potatoMeter.percentage,
        averageRating: movie.potatoMeter.averageRating,
        totalCount: movie.potatoMeter.totalCount,
        fresh: movie.potatoMeter.fresh,
        spoiled: movie.potatoMeter.spoiled
      },
      audienceScore: {
        percentage: movie.audienceScore.percentage,
        averageRating: movie.audienceScore.averageRating,
        totalCount: movie.audienceScore.totalCount
      },
      videoUrl: movie.videoUrl,
      imgUrl: movie.imgUrl
    });

    moviePreview.save(function(err, moviePreview) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
  });
};

module.exports.save = save;
