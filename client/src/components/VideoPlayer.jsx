import React from "react";

class VideoPlayer extends React.Component {
  render() {
    return (
      <div className="aspect-ratio--16x9">
        <div className="aspect-ratio__inner-wrapper" onclick={this.ModalVideo}>
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
