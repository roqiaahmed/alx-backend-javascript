const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe("type === SUM", () => {
    it("string + string", () => {
      expect(calculateNumber("SUM", 3, 5)).to.equal(8);
    });
    it("float + float", () => {
      expect(calculateNumber("SUM", 3.6, 5.0)).to.equal(9);
    });
    it("string + float", () => {
      expect(calculateNumber("SUM", 3, 5.6)).to.equal(9);
    });
  });
  describe("type === SUBTRACT", () => {
    it("positive numbers", () => {
      expect(calculateNumber("SUBTRACT", 2.0, 2.0)).to.equal(0);
    });
    it("negative numbers ", () => {
      expect(calculateNumber("SUBTRACT", -2.3, -1.8)).to.equal(0);
    });

    it("negative and positive numbers", () => {
      expect(calculateNumber("SUBTRACT", -2.0, 2.0)).to.equal(4.0);
    });
  });
  describe("type === DIVIDE", () => {
    it("positive numbers", () => {
      expect(calculateNumber("DIVIDE", 8.0, 2.0)).to.equal(4.0);
    });

    it("numbers with different signs", () => {
      expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
    });

    it("positive number and number rounded to 0", () => {
      expect(calculateNumber("DIVIDE", 5.0, -0.2)).to.equal("Error");
    });
  });
});
