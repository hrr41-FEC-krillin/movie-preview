import React from "react";

class Poster extends React.Component {
  render() {
    return (
      <div>
        <img style={styles.moviePoster} src={this.props.imgUrl} />
      </div>
    );
  }
}

export default Poster;

const styles = {
  moviePoster: {
    height: "315px",
    width: "206px",
    marginRight: "10px"
  }
};
