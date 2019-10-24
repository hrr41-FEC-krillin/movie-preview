import React from "react";
import MoreInfo from "./MoreInfo.jsx";
import styles from "../styles/CriticConsensus.js";

class CriticConsensus extends React.Component {
  renderPotato() {
    if (this.props.potatoPercentage > 59) {
      return (
        <img
          style={styles.potatoImg}
          src={"https://moviepreview.s3.us-east-2.amazonaws.com/potato.png"}
        />
      );
    } else {
      return (
        <img
          style={styles.potatoImg}
          src={
            "https://moviepreview.s3.us-east-2.amazonaws.com/greenpotato.png"
          }
        />
      );
    }
  }

  renderLines(title) {
    var num = 31;
    var output = "";
    num -= title.length;
    while (num > 2) {
      output += "─";
      num -= 2;
    }

    if (title.length > 10 && title.length < 16) {
      output += "─";
    } else if (title.length > 15 && title.length < 21) {
      output += "──";
    } else if (title.length > 20) {
      output += "───";
    }

    return output;
  }

  renderPopcorn() {
    if (this.props.audiencePercentage > 59) {
      return (
        <img
          style={styles.popcornImg}
          src="https://moviepreview.s3.us-east-2.amazonaws.com/popcorn.png"
        />
      );
    } else {
      return (
        <img
          style={styles.greenPopcornImg}
          src="https://moviepreview.s3.us-east-2.amazonaws.com/greenpopcorn.png"
        />
      );
    }
  }

  // TODO
  // renderHorizontalLine() {
  // title has 20 characters, there are 7 dshses on each
  // }
  render() {
    return (
      <div className="title" style={styles.criticConsensusContainer}>
        <h1 style={styles.header}>
          {this.renderLines(this.props.title)}
          &nbsp;&nbsp;
          {this.props.title.toUpperCase()}
          &nbsp;&nbsp;
          {this.renderLines(this.props.title)}
        </h1>
        <div style={styles.criticConsensus}>Critics Consensus</div>
        <div style={styles.consensus}>{this.props.consensus}</div>
        <div style={styles.ratingsContainer}>
          <div style={styles.potatoRatingsContainer}>
            <div style={styles.potatoImgPercentage}>
              {this.renderPotato()}
              <div style={styles.potatoPercentage}>
                {this.props.potatoPercentage}
                {"%"}
              </div>
            </div>
            <div style={styles.potatoMeterTitle}>POTATO METER</div>
            <div style={styles.potatoCount}>
              Total Count: {this.props.potatoReviewCount}
            </div>
          </div>
          <div style={styles.audienceRatingsContainer}>
            <div style={styles.audienceImgPercentage}>
              {this.renderPopcorn()}
              <div style={styles.audiencePercentage}>
                {this.props.audiencePercentage}
                {"%"}
              </div>
            </div>
            <div style={styles.audienceScoreTitle}>AUDIENCE SCORE</div>
            <div style={styles.audienceCount}>
              Verified Ratings: {this.props.audienceReviewCount}
            </div>
          </div>
        </div>
        {/* //eventually move this to moreinfo component */}
        <div style={styles.moreInfoBar}>
          <MoreInfo
            potatoPercentage={this.props.potatoPercentage}
            audiencePercentage={this.props.audiencePercentage}
            potatoReviewCount={this.props.potatoReviewCount}
            audienceReviewCount={this.props.audienceReviewCount}
            potatoAverageRating={this.props.potatoAverageRating}
            freshPotatos={this.props.freshPotatos}
            spoiledPotatos={this.props.spoiledPotatos}
            audienceAverageRating={this.props.audienceAverageRating}
            // renderPopcorn={this.renderPopcorn}
            // renderPotato={this.renderPotato}
          />
        </div>
      </div>
    );
  }
}

export default CriticConsensus;
