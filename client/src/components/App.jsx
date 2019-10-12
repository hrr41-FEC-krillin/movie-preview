import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import CriticConsensus from "./CriticConsensus.js";
// import MoreInfo from "./MoreInfo.js";
// import Poster from "./Poster.js";
import VideoPlayer from "./VideoPlayer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      consensus: "",
      potatoPercentage: 0,
      potatoAverageRating: 0,
      potatoReviewCount: 0,
      freshPotatos: 0,
      spoiledPotatos: 0,
      audiencePercentage: 0,
      audienceAverageRating: 0,
      audienceReviewCount: 0,
      videoUrl: "",
      imgUgl: ""
    };
    this.getMovieInfo = this.getMovieInfo.bind(this);
  }

  getMovieInfo() {
    axios
      .get("/api/moviePreviews")
      .then(response => {
        console.log(response.data);
        this.setState({
          name: response.data[0].movieName,
          consensus: response.data[0].criticConsensus,
          potatoPercentage: response.data[0].potatoMeter.percentage,
          potatoAverageRating: response.data[0].potatoMeter.averageRating,
          potatoReviewCount: response.data[0].potatoMeter.totalCount,
          freshPotatos: response.data[0].potatoMeter.fresh,
          spoiledPotatos: response.data[0].potatoMeter.spoiled,
          audiencePercentage: response.data[0].audienceScore.percentage,
          audienceAverageRating: response.data[0].audienceScore.averageRating,
          audienceReviewCount: response.data[0].audienceScore.totalCount,
          videoUrl: response.data[0].videoUrl,
          imgUgl: response.data[0].imgUrl
        });
      })
      .catch(error => {
        console.log("Error from get moviepreview", error);
      })
      .finally(() => {});
  }

  componentDidMount() {
    this.getMovieInfo();
  }

  render() {
    return (
      <div>
        <VideoPlayer videoUrl={this.state.videoUrl} />
      </div>
    );
  }
}

export default App;
