const { expect } = require("chai");
const request = require("request");

describe("GET /", () => {
  const API = "http://localhost:7865";
  it("res with 'Welcome to the payment system' and status code", (done) => {
    request.get(API + "/", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
    });
    done();
  });
});
