const app = require("../../server/index.js");
import React from "react";
import { shallow, mount, render, configure } from "enzyme";
import App from "./components/App.jsx";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
const request = require("supertest");

//Timer mock from setting up mongoose with jest https://mongoosejs.com/docs/jest.html
const time = require("./time");
const sinon = require("sinon");
sinon.stub(time, "setTimeout");

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

app.get("/user", function(req, res) {
  res.status(200).json({ name: "john" });
});

describe("GET /user", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

import CheckboxWithLabel from "./CheckboxWithLabel";

test("CheckboxWithLabel changes the text after click", () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual("Off");

  checkbox.find("input").simulate("change");

  expect(checkbox.text()).toEqual("On");
});
