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

  it("res with 'Payment methods for cart :13' and status 200", (done) => {
    request.get(`${API}/cart/13`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart :13");
    });
    done();
  });
  it("status 404", (done) => {
    request.get(`${API}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
    done();
  });
});
