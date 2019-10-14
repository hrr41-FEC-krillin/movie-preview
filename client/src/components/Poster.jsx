import React from "react";

class Poster extends React.Component {
  render() {
    return (
      <div>
        <img className="movie-poster" src={this.props.imgUrl} />
      </div>
    );
  }
}

export default Poster;
