import React from "react";
import ModalVideo from "react-modal-video";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <div className="aspect-ratio--16x9">
        <div className="aspect-ratio__inner-wrapper">
          <iframe
            className="trailer"
            src={this.props.videoUrl.replace("watch?v=", "embed/")}
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;

{
  /* <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="1xqwyudGlPU"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button onClick={this.openModal}>Button</button> */
}
