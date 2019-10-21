///// ******************SERVER TESTS***************** /////
import axios from "axios";
import models from "../database/models.js";

describe("Product Model", () => {
  test("it should retrieve product data from the database", async () => {
    let result = await models.movie.get("jean shorts mustache");
    expect(result).toBeDefined();
    expect(result.potatoMeter.percentage).toBe(97);
    expect(result.title).toBe("jean shorts mustache");
  });
});

describe("Get request", () => {
  test("it should return a single movie's information from the database with proper url", async () => {
    try {
      var response = await axios.get(
        "http://127.0.0.1:3050/api/movie?title=jean+shorts+mustache"
      );
    } catch (err) {
      console.log("error");
    }
    expect(response.data.title).toBe("jean shorts mustache");
  });

  test("it should return error with erroneous url", async () => {
    try {
      var response = await axios.get(
        "http://127.0.0.1:3050/api/movie?NOTREALENDPOINT=NOPE"
      );
    } catch (err) {
      var response = err;
    }
    expect(response.data).toBe(null);
  });
});

///// ******************DATABASE TESTS***************** /////
// let data = require("../seedMe.json");
// let testSave = require("./database/index.js");

// describe("Database", () => {
//   let testDB = testSave.testSave(data);

//   test("Each model will have the designated properties", () => {
//     expect(testDB).toHaveProperty("title");
//   });
// });
