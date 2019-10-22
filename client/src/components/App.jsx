import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CriticConsensus from "./CriticConsensus.jsx";
import MoreInfo from "./MoreInfo.jsx";
import Poster from "./Poster.jsx";
import VideoPlayer from "./VideoPlayer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
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
    this.getMovie = this.getMovie.bind(this);
    this.openModal = this.openModal.bind(this);
    this.getMovieTest = this.getMovieTest.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  async getMovieTest() {
    try {
      let response = await axios.get("/api/movie?title=tilde");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getMovie() {
    let title = window.location.search.slice(7);
    title = title.split("+").join(" ");

    try {
      let response = await axios.get("/api/movie", {
        params: {
          title: title
        }
      });
      this.setState({
        title: response.data.title,
        consensus: response.data.criticConsensus,
        potatoPercentage: response.data.potatoMeter.percentage,
        potatoAverageRating: response.data.potatoMeter.averageRating,
        potatoReviewCount: response.data.potatoMeter.totalCount,
        freshPotatos: response.data.potatoMeter.fresh,
        spoiledPotatos: response.data.potatoMeter.spoiled,
        audiencePercentage: response.data.audienceScore.percentage,
        audienceAverageRating: response.data.audienceScore.averageRating,
        audienceReviewCount: response.data.audienceScore.totalCount,
        videoUrl: response.data.videoUrl,
        imgUrl: response.data.imgUrl,
        videoScene: response.data.videoScene
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  // getMovie() {
  //   let title = window.location.search.slice(7);
  //   title = title.split("+").join(" ");

  //   axios
  //     .get("/api/movie", {
  //             params: {
  //               title: title
  //             }
  //           });
  //     .then(response => {
  //       this.setState({
  //       title: response.data.title,
  //       consensus: response.data.criticConsensus,
  //       potatoPercentage: response.data.potatoMeter.percentage,
  //       potatoAverageRating: response.data.potatoMeter.averageRating,
  //       potatoReviewCount: response.data.potatoMeter.totalCount,
  //       freshPotatos: response.data.potatoMeter.fresh,
  //       spoiledPotatos: response.data.potatoMeter.spoiled,
  //       audiencePercentage: response.data.audienceScore.percentage,
  //       audienceAverageRating: response.data.audienceScore.averageRating,
  //       audienceReviewCount: response.data.audienceScore.totalCount,
  //       videoUrl: response.data.videoUrl,
  //       imgUrl: response.data.imgUrl,
  //       videoScene: response.data.videoScene
  //       });
  //     })
  //     .catch(error => {
  //       console.log("Error from get moviepreview", error);
  //     })
  //     .finally(() => {});
  // }

  componentDidMount() {
    this.getMovie();
    console.log("umm");
  }

  showHideStyle() {
    return this.state.isOpen
      ? styles.modalDisplayBlock
      : styles.modalDisplayNone;
  }

  render() {
    return (
      <div
        style={styles.parentDiv}
        onClick={() => {
          if (this.state.isOpen === true) {
            this.setState({
              isOpen: false,
              videoUrl: ""
            });
            setTimeout(() => {
              this.getMovie();
            }, 100);
          }
        }}
      >
        <VideoPlayer
          videoUrl={this.state.videoUrl}
          onClick={this.openModal}
          videoScene={this.state.videoScene}
          openModal={this.openModal}
        />
        <div style={this.showHideStyle()}>
          <div style={styles.modalMain}>
            <div>
              <div>
                <iframe
                  src={
                    this.state.videoUrl.replace("watch?v=", "embed/") +
                    "?autoplay=1"
                  }
                  width="1090px"
                  height="600px"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.posterCriticContainer}>
          <Poster imgUrl={this.state.imgUrl} />
          <CriticConsensus
            consensus={this.state.consensus}
            title={this.state.title}
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
  modalDisplayBlock: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .6)",
    display: "block",
    zIndex: "1000"
  },
  modalDisplayNone: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .6)",
    display: "none",
    zIndex: "1000"
  },
  modalMain: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "300px",
    left: "300px"
  },
  parentDiv: {
    width: "825px",
    marginTop: "10px",
    marginLeft: "10px",
    display: "relative"
  },
  posterCriticContainer: {
    width: "825px",
    display: "flex",
    flexDirection: "row",
    marginTop: "10px"
  }
};
