import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CriticConsensus from "./CriticConsensus.jsx";
// import MoreInfo from "./MoreInfo.js";
import Poster from "./Poster.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import ModalVideo from "react-modal-video";

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
      imgUrl: "",
      isOpen: false
    };
    this.getMovieInfo = this.getMovieInfo.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
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
          imgUrl: response.data[0].imgUrl
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
      <div className="parent-div">
        <div>
          <VideoPlayer
            videoUrl={this.state.videoUrl}
            onClick={this.openModal}
          />
          {/* <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="1xqwyudGlPU"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button onClick={this.openModal}>Button</button> */}
        </div>
        <div className="poster-critic-container">
          <Poster imgUrl={this.state.imgUrl} />
          <CriticConsensus
            consensus={this.state.consensus}
            name={this.state.name}
            potatoPercentage={this.state.potatoPercentage}
            audiencePercentage={this.state.audiencePercentage}
            potatoReviewCount={this.state.potatoReviewCount}
            audienceReviewCount={this.state.audienceReviewCount}
          />
        </div>
      </div>
    );
  }
}

export default App;

// {
//   this.state.videoUrl.substring(this.state.videoUrl.indexOf("=") + 1);
// }
