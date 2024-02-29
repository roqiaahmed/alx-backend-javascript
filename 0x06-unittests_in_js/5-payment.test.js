const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  let consoleSpy;
  beforeEach(() => {
    if (!consoleSpy) {
      consoleSpy = sinon.spy(console, "log");
    }
  });
  afterEach(() => {
    consoleSpy.resetHistory();
  });
  it("sendPaymentRequestToAPI", () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
  it("sendPaymentRequestToAPI", () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith("The total is: 20")).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
