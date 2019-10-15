import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const buttonStyle = {
  backgroundColor: "#2a2c32",
  borderRadius: "4px 4px 0 0",
  border: "none",
  color: "white",
  fontSize: "12px",
  padding: "7x 12px 10px",
  letterSpacing: "0.075em",
  fontWeight: "700",
  fontFamily: "Franklin Gothic FS Med, sans-serif",
  bottom: "0",
  position: "aboslute"
};

const starStyle = {
  marginTop: "-4px"
};

const audienceBlip = {
  fontFamily: "Franklin Gothic FS Book, sans-serif",
  fontWeight: "500",
  fontSize: "14px",
  position: "absolute",
  left: "235px",
  top: "110px",
  right: "50px"
};

const audienceAvgStyle = {
  position: "absolute",
  left: "235px",
  fontFamily: "Franklin Gothic FS Book, sans-serif",
  fontWeight: "500",
  fontSize: "14px"
};

const audienceTitleStyle = {
  position: "absolute",
  fontSize: "18px",
  fontFamily: "Neusa Next Pro Compact Medium, Impact, Arial, sans-serif",
  letterSpacing: "0.3px",
  lineHeight: "1",
  color: "#2a2c32",
  left: "240px",
  top: "19px"
};

const audiencePercentageStyle = {
  fontSize: "18px",
  fontFamily: "Franklin Gothic FS Book, sans-serif",
  color: "#2a2c33",
  fontWeight: "700",
  left: "405px",
  position: "absolute",
  top: "20px"
};

const popCornStyle = {
  height: "25px",
  width: "20px",
  position: "absolute",
  left: "380px",
  top: "14px"
};

const healthStyle = {
  marginLeft: "-10px",
  marginBottom: "10px"
};

const audienceHealthStyle = {
  left: "235px",
  top: "15px",
  marginBottom: "10px",
  position: "absolute"
};
const potatoStyle = {
  height: "25px",
  width: "20px",
  marginLeft: "20px",
  marginRight: "5px"
};

const titleStyle = {
  fontSize: "18px",
  fontFamily: "Neusa Next Pro Compact Medium, Impact, Arial, sans-serif",
  letterSpacing: "0.3px",
  lineHeight: "1",
  color: "#2a2c32"
};

const percentageStyle = {
  fontSize: "18px",
  fontFamily: "Franklin Gothic FS Book, sans-serif",
  color: "#2a2c33",
  fontWeight: "700"
};

const bodyStyle = {
  fontFamily: "Franklin Gothic FS Book, sans-serif",
  fontWeight: "500",
  fontSize: "14px"
};

class MoreInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

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

  renderHealthBar(num) {
    if (num < 5) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/0.png";
    } else if (num < 10) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/5.png";
    } else if (num < 15) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/10.png";
    } else if (num < 20) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/15.png";
    } else if (num < 25) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/20.png";
    } else if (num < 30) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/25.png";
    } else if (num < 35) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/30.png";
    } else if (num < 40) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/35.png";
    } else if (num < 45) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/40.png";
    } else if (num < 50) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/45.png";
    } else if (num < 55) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/50.png";
    } else if (num < 60) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/55.png";
    } else if (num < 65) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/60.png";
    } else if (num < 70) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/65.png";
    } else if (num < 75) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/70.png";
    } else if (num < 80) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/75.png";
    } else if (num < 85) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/80.png";
    } else if (num < 90) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/85.png";
    } else if (num < 95) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/90.png";
    } else if (num < 100) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/95.png";
    } else if (num === 100) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/100.png";
    }
  }

  renderStars(num) {
    if (num < 0.5) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/0stars.png";
    } else if (num < 1) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/0.5stars.png";
    } else if (num < 1.5) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/1stars.png";
    } else if (num < 2) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/1.5stars.png";
    } else if (num < 2.5) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/2stars.png";
    } else if (num < 3) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/2.5stars.png";
    } else if (num < 3.5) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/3stars.png";
    } else if (num < 4) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/3.5stars.png";
    } else if (num < 4.5) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/4stars.png";
    } else if (num < 5) {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/4.5stars.png";
    } else {
      return "https://moviepreview.s3.us-east-2.amazonaws.com/5stars.png";
    }
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  render() {
    return (
      <>
        <Button style={buttonStyle} variant="primary" onClick={this.handleShow}>
          MORE INFO
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title style={titleStyle}>
              POTATOMETER
              <img style={potatoStyle} src={this.renderPotato()} />
              <span style={percentageStyle}>
                {this.props.potatoPercentage}
                {"%"}
              </span>
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
              <span style={audienceTitleStyle}>AUDIENCE SCORE</span>
              <img style={popCornStyle} src={this.renderPopcorn()} />
              <span style={audiencePercentageStyle}>
                {this.props.audiencePercentage}
                {"%"}
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={bodyStyle}>
            <img
              style={healthStyle}
              src={this.renderHealthBar(this.props.potatoPercentage)}
            />
            <img
              style={audienceHealthStyle}
              src={this.renderHealthBar(this.props.audiencePercentage)}
            />
            {<br></br>}
            Average Rating: {<b> {this.props.potatoAverageRating}/10 </b>}
            <span style={audienceAvgStyle}>
              Average Rating:
              <img
                style={starStyle}
                src={this.renderStars(this.props.audienceAverageRating)}
              />
              {<b> {this.props.audienceAverageRating}</b>}
            </span>
            {<br></br>}
            Total Count: {<b>{this.props.potatoReviewCount}</b>}
            <span style={audienceAvgStyle}>
              Total Count: {<b>{this.props.audienceReviewCount}</b>}
            </span>
            {<br></br>}
            Fresh: {<b> {this.props.freshPotatos} </b>}
            &nbsp; Spoiled: {<b>{this.props.spoiledPotatos}</b>}
            {<br></br>}
            {<br></br>}
            <span style={audienceBlip}>
              The percentage of regular potatos we've confirmed bought tickets
              for this movie who rated it 3.5 stars or higher.
            </span>
            The percentage of Approved {<br></br>}
            Potatos who have given this {<br></br>}
            movie a positive review.
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default MoreInfo;

//This will be the popup feature clicked from the criticconsensus component
//It will show critic percetange of good reviews, average rating, total reviews, good reviews, bad reviews
//It will show audience percentage of good reviews, average rating, total reviews
//+ health bar based on %, turns green below 60
