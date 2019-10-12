import React from "react";

class VideoPlayer extends React.Component {
  replaceWithEmbed() {
    var url = this.props.videoUrl;
  }
  render() {
    return (
      <div className="videoPlayer">
        <iframe
          className="embed-responsive-item embed-responsive-16by9"
          src={this.props.videoUrl.replace("watch?v=", "embed/")}
          allowFullScreen
          frameBorder="0"
          // height="400px"
          // width="650px"
        ></iframe>
      </div>
    );
  }
}

export default VideoPlayer;
