import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CriticConsensus from "./CriticConsensus.jsx";
import MoreInfo from "./MoreInfo.jsx";
import Poster from "./Poster.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import ModalVideo from "react-modal-video";
// @import "node_modules/react-modal-video/scss/modal-video.scss";

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
      videoScene: "",
      isOpen: false
    };
    this.getMovieInfo = this.getMovieInfo.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  getVideoId(link) {
    let videoId = link.split("v=", 1);
    let ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return videoId;
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
          imgUrl: response.data[0].imgUrl,
          videoScene: response.data[0].videoScene
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
      <div style={styles.parentDiv}>
        <VideoPlayer
          videoUrl={this.state.videoUrl}
          onClick={this.openModal}
          videoScene={this.state.videoScene}
          openModal={this.openModal}
        />
        <ModalVideo
          // style={styles.modalStyle}
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.getVideoId(this.state.videoUrl)}
          onClose={() => this.setState({ isOpen: false })}
        />
        <div style={styles.posterCriticContainer}>
          <Poster imgUrl={this.state.imgUrl} />
          <CriticConsensus
            consensus={this.state.consensus}
            name={this.state.name}
            potatoPercentage={this.state.potatoPercentage}
            audiencePercentage={this.state.audiencePercentage}
            potatoReviewCount={this.state.potatoReviewCount}
            audienceReviewCount={this.state.audienceReviewCount}
            potatoAverageRating={this.state.potatoAverageRating}
            freshPotatos={this.state.freshPotatos}
            spoiledPotatos={this.state.spoiledPotatos}
            audienceAverageRating={this.state.audienceAverageRating}
          />
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  modalStyle: {
    overlay: { zIndex: 1 },
    position: "absolute"
    // top: "0",
    // left: "0",
    // right: "0",
    // bottom: "0"
  },
  parentDiv: {
    width: "750px"
  },
  posterCriticContainer: {
    width: "750px",
    display: "flex",
    flexDirection: "row",
    marginTop: "10px"
  }
};
