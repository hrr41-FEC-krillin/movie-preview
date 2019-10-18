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

  renderLines(title) {
    var num = 33;
    var output = "";
    num -= title.length;
    while (num > 2) {
      output += "─";
      num -= 2;
    }
    return output;
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
      <div style={styles.criticConsensusContainer}>
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
              <img style={styles.potatoImg} src={this.renderPotato()} />
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
              <img style={styles.popcornImg} src={this.renderPopcorn()} />
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

const styles = {
  criticConsensusContainer: {
    height: "325px",
    width: "590px",
    backgroundColor: "#efefef",
    position: "relative"
  },
  header: {
    fontWeight: "bold",
    fontFamily: "Neusa Next Pro Compact Medium, Impact, Arial, sans-serif",
    letterSpacing: "0.5px",
    textAlign: "center",
    color: "#2a2c33",
    fontSize: "25px",
    marginTop: "15px"
  },
  consensus: {
    marginTop: "5px",
    fontFamily: "sans-serif",
    fontSize: "13px",
    textAlign: "center",
    fontWeight: "300",
    marginLeft: "20px",
    marginRight: "20px"
  },
  criticConsensus: {
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "Franklin Gothic FS Med, sans-serif",
    fontSize: "17px",
    marginTop: "20px"
  },
  ratingsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    top: "165px",
    left: "155px"
  },
  potatoRatingsContainer: {
    marginRight: "20px"
  },
  audienceRatingsContainer: {
    marginLeft: "20px"
  },
  potatoImgPercentage: {
    display: "flex",
    flexDirection: "row"
  },
  audienceImgPercentage: {
    display: "flex",
    flexDirection: "row"
  },
  potatoImg: {
    height: "50px",
    width: "40px"
  },
  popcornImg: {
    height: "50px",
    width: "40px"
  },
  potatoPercentage: {
    fontSize: "35px",
    fontWeight: "700",
    fontFamily: "Franklin Gothic FS Book, sans-serif",
    marginLeft: "10px",
    color: "#2a2c33"
  },
  audiencePercentage: {
    fontSize: "35px",
    fontWeight: "700",
    fontFamily: "Franklin Gothic FS Book, sans-serif",
    marginLeft: "10px",
    color: "#2a2c33"
  },
  potatoMeterTitle: {
    fontFamily: "Neusa Next Pro Compact Medium, Impact, Arial, sans-serif",
    fontSize: "17px",
    letterSpacing: "0.4px",
    lineHeight: "1",
    color: "#2a2c32",
    textAlign: "right",
    marginTop: "15px"
  },
  audienceScoreTitle: {
    fontFamily: "Neusa Next Pro Compact Medium, Impact, Arial, sans-serif",
    fontSize: "17px",
    letterSpacing: "0.4px",
    lineHeight: "1",
    color: "#2a2c32",
    textAlign: "left",
    marginTop: "15px"
  },
  potatoCount: {
    fontFamily: "Franklin Gothic FS Med, sans-serif",
    color: "#2a2c32",
    textAlign: "right",
    marginTop: "5px",
    fontSize: "14px"
  },
  audienceCount: {
    fontFamily: "Franklin Gothic FS Med, sans-serif",
    color: "#2a2c32",
    textAlign: "left",
    marginTop: "5px",
    fontSize: "14px"
  },
  moreInfoBar: {
    height: "18px",
    position: "absolute",
    bottom: "0",
    width: "100%",
    borderBottom: "10px solid #2a2c33",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
