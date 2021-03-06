require("dotenv").config();
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
autoIncrement.initialize(mongoose);

let previewSchema = mongoose.Schema({
  title: String,
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
  imgUrl: String,
  videoScene: String
});

previewSchema.plugin(autoIncrement.plugin, "Preview");

let Preview = mongoose.model("Preview", previewSchema);

let save = movies => {
  movies.forEach(movie => {
    let moviePreview = new Preview({
      title: movie.title,
      criticConsensus: movie.criticConsensus,
      potatoMeter: {
        fresh: movie.potatoMeter.fresh,
        spoiled: movie.potatoMeter.spoiled,
        percentage: movie.potatoMeter.percentage,
        averageRating: movie.potatoMeter.averageRating,
        totalCount: movie.potatoMeter.totalCount
      },
      audienceScore: {
        totalCount: movie.audienceScore.totalCount,
        percentage: movie.audienceScore.percentage,
        averageRating: movie.audienceScore.averageRating
      },
      videoUrl: movie.videoUrl,
      imgUrl: movie.imgUrl,
      videoScene: movie.videoScene
    });

    moviePreview.save((err, moviePreview) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
  });
};

module.exports.save = save;
module.exports.Preview = Preview;
