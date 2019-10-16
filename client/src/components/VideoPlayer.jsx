import React from "react";
import ModalVideo from "react-modal-video";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      hover: false
    };
  }

  onHover() {
    this.setState({
      hover: !this.state.hover
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
        height: "320px",
        position: "relative"
      },
      videoScene: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
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
      </div>
    );
  }
}

export default VideoPlayer;
