const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", () => {
  it("sendPaymentRequestToApi called with Utils.calculateNumber", () => {
    const calculateNumberSpy = sinon.spy(utils);
    sendPaymentRequestToApi(30, 70);
    expect(calculateNumberSpy.calculateNumber.calledWith("SUM", 30, 70)).to.be
      .true;
    expect(calculateNumberSpy.calculateNumber.calledOnce).to.be.true;
  });
});
