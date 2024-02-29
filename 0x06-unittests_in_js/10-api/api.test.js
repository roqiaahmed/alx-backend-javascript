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
  it("GET /available_payments returns valid response", (done) => {
    request.get(`${API}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
  it("POST /login returns valid response", (done) => {
    request.post(
      `${API}/login`,
      { json: { userName: "Pinkbrook" } },
      (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal("Welcome Pinkbrook");
        done();
      }
    );
  });
});
