const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const utils = require("./utils");

const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("should return The 'total is: 10' in console", () => {
    const calculateNumberStubs = sinon
      .stub(utils, "calculateNumber")
      .returns(10);
    const consoleSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStubs.calledWith("SUM", 100, 20)).to.be.true;
    expect(calculateNumberStubs.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 10")).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
