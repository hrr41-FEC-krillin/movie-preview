import "jsdom-global/register";
const app = require("../../server/index.js");
import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import App from "../src/components/App.jsx";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import MoreInfo from "../src/components/MoreInfo.jsx";
const time = require("./time");
const sinon = require("sinon");
sinon.stub(time, "setTimeout");
import axios from "axios";
import Poster from "../src/components/Poster.jsx";
import CriticConsensus from "../src/components/CriticConsensus.jsx";
jest.mock("axios");

describe("<App />", () => {
  test("should fetch movie", async () => {
    const movie = {
      title: "tilde",
      criticConsensus:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sed nisi euismod, rhoncus quam quis, molestie est. Integer ullamcorper vestibulum massa non porta.",
      potatoMeter: {
        percentage: 52,
        averageRating: 6,
        totalCount: 390,
        fresh: 206,
        spoiled: 184
      },
      audienceScore: {
        percentage: 88,
        averageRating: 4.42,
        totalCount: 76164
      },
      videoUrl: "https://www.youtube.com/watch?v=c_Ne5g5F-WY",
      imgUrl:
        "https://moviepreview.s3.us-east-2.amazonaws.com/wizardofozposter.png",
      videoScene:
        "https://moviepreview.s3.us-east-2.amazonaws.com/wizardofozscene.jpeg"
    };
    const resp = { data: movie };
    await axios.get.mockResolvedValue(resp);
    const wrapper = shallow(<App />);
    wrapper
      .instance()
      .getMovieTest()
      .then(data => expect(data).toBe(movie));
  });
  it("has state", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toHaveState("title");
    expect(wrapper).toHaveState("consensus");
    expect(wrapper).toHaveState("potatoPercentage");
    expect(wrapper).toHaveState("potatoAverageRating");
    expect(wrapper).toHaveState("potatoReviewCount");
    expect(wrapper).toHaveState("freshPotatos");
    expect(wrapper).toHaveState("spoiledPotatos");
    expect(wrapper).toHaveState("audiencePercentage");
    expect(wrapper).toHaveState("audienceAverageRating");
    expect(wrapper).toHaveState("audienceReviewCount");
    expect(wrapper).toHaveState("videoUrl");
    expect(wrapper).toHaveState("imgUrl");
    expect(wrapper).toHaveState("videoScene");
    expect(wrapper).toHaveState("isOpen");
  });
  it("state has value", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state("potatoPercentage")).toBe(0);
  });
  it("allows us to set props", () => {
    const wrapper = mount(<App bar="baz" />);
    expect(wrapper.props().bar).toBe("baz");
    wrapper.setProps({ bar: "foo" });
    expect(wrapper.props().bar).toBe("foo");
  });
  it("calls componentDidMount", () => {
    sinon.spy(App.prototype, "componentDidMount");
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).toHaveProperty("callCount", 1);
    App.prototype.componentDidMount.restore();
  });
  it("uses iframe for videos", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("iframe")).toExist();
  });
  it("matches the component", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchElement(<App />);
  });
});

describe("<Poster />", () => {
  test("Poster renders an image", () => {
    const wrapper = mount(<Poster />);
    expect(wrapper.find("img")).toExist();
  });
});

describe("<MoreInfo />", () => {
  it("has a button", () => {
    const wrapper = shallow(<MoreInfo />);
    expect(wrapper.find(".button")).toHaveLength(1);
  });
});

describe("<CriticConsensus />", () => {
  it("renders title based on props passed down", () => {
    const wrapper = mount(<CriticConsensus title="Lion King" />);
    expect(wrapper.find(".title").text()).toBe("Lion King");
  });
});
