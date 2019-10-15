import React from "react";
import MoreInfo from "./MoreInfo.jsx";
// import Hr from "react-native-hr-component";

class CriticConsensus extends React.Component {
  renderPotato() {
    if (this.props.potatoPercentage > 59) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/potato.png";
    } else {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/Smashed_Potato_Yellow.png";
    }
  }

  renderPopcorn() {
    if (this.props.audiencePercentage > 59) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/popcorn.png";
    } else {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/greenpopcorn.png";
    }
  }

  // TODO
  // renderHorizontalLine() {
  // title has 20 characters, there are 7 dshses on each
  // }
  render() {
    return (
      <div className="critic-consensus-container">
        <h1 className="header">
          ─────── {this.props.name.toUpperCase()} ───────
        </h1>
        <div className="critic-consensus">Critics Consensus</div>
        <div className="consensus">{this.props.consensus}</div>
        <div className="ratings-container">
          <div className="potato-ratings-container">
            <div className="potato-img-percentage">
              <img className="potato-img" src={this.renderPotato()} />
              <div className="potato-percentage">
                {this.props.potatoPercentage}
                {"%"}
              </div>
            </div>
            <div className="potato-meter-title">POTATO METER</div>
            <div className="potato-count">
              Total Count: {this.props.potatoReviewCount}
            </div>
          </div>
          <div className="audience-ratings-container">
            <div className="audience-img-percentage">
              <img className="popcorn-img" src={this.renderPopcorn()} />
              <div className="audience-percentage">
                {this.props.audiencePercentage}
                {"%"}
              </div>
            </div>
            <div className="audience-score-title">AUDIENCE SCORE</div>
            <div className="audience-count">
              Verified Ratings: {this.props.audienceReviewCount}
            </div>
          </div>
        </div>
        {/* //eventually move this to moreinfo component */}
        <div className="more-info-bar">
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
