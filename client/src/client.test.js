import "jsdom-global/register";
const app = require("../../server/index.js");
import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import App from "./components/App.jsx";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import MoreInfo from "./components/MoreInfo.jsx";
// const request = require("supertest");
// import waitUntil from "async-wait-until";
// import nock from "nock";

//Timer mock from setting up mongoose with jest https://mongoosejs.com/docs/jest.html
const time = require("./time");
const sinon = require("sinon");
sinon.stub(time, "setTimeout");

import axios from "axios";
jest.mock("axios");

describe("client side get request", () => {
  test("should fetch movie", async () => {
    const movie = [
      {
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
      }
    ];

    const resp = { data: movie };
    await axios.get.mockResolvedValue(resp);
    const wrapper = shallow(<App />);

    wrapper
      .instance()
      .getMovieTest()
      .then(data => expect(data).toBe(movie));
  });
});

describe("<App />", () => {
  it("has state", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toHaveState("title");
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
  it("has a button", () => {
    const wrapper = shallow(<MoreInfo />);
    expect(wrapper.find(".button")).toHaveLength(1);
  });
});
