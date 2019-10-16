import React from "react";
import ModalVideo from "react-modal-video";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hover: false
    };
    // this.openModal = this.openModal.bind(this);
  }

  // getVideoId(link) {
  //   let videoId = link.split("v=", 1);
  //   let ampersandPosition = videoId.indexOf("&");
  //   if (ampersandPosition != -1) {
  //     videoId = videoId.substring(0, ampersandPosition);
  //   }
  //   return videoId;
  // }

  onHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    const styles = {
      playButton: {
        opacity: this.state.hover ? "75.0" : "0.5",
        transition: "opacity 100ms ease-in",
        height: "75px",
        width: "75px",
        position: "absolute",
        left: "50%",
        top: "50%",
        marginTop: "-37.5px",
        marginLeft: "-37.5px"
      },
      invisWrapper: {
        width: "100%",
        height: "290px",
        position: "relative"
      },
      videoScene: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
      // modalStyle: {
      //   overlay: { zIndex: 9999 },
      //   position: "fixed",
      //   top: "0",
      //   left: "0",
      //   right: "0",
      //   bottom: "0"
      // }
    };
    return (
      <div
        style={styles.invisWrapper}
        onMouseEnter={this.onHover.bind(this)}
        onMouseLeave={this.onHover.bind(this)}
        onClick={this.props.openModal}
      >
        <img style={styles.videoScene} src={this.props.videoScene} />
        <img
          style={styles.playButton}
          src="https://moviepreview.s3.us-east-2.amazonaws.com/playbutton.jpg"
        />
        {/* <ModalVideo
          style={styles.modalStyle}
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.getVideoId(this.props.videoUrl)}
          onClose={() => this.setState({ isOpen: false })}
          theme="dark"
        /> */}
      </div>
    );
  }
}

export default VideoPlayer;

// <div className="aspect-ratio--16x9">
//   <div className="aspect-ratio__inner-wrapper">
//     <iframe
//       className="trailer"
//       src={this.props.videoUrl.replace("watch?v=", "embed/")}
//       allowFullScreen
//       frameBorder="0"
//     ></iframe>
//   </div>
// </div>
