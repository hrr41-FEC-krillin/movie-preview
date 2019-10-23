import React from "react";
import styles from "../styles/Poster.js";

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
