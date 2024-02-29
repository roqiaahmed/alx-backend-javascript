const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("sholud return data", (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data.data).to.equal("Successful response from the API");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
