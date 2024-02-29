const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe("type === SUM", () => {
    it("string + string", () => {
      assert.strictEqual(calculateNumber("SUM", 3, 5), 8);
    });
    it("float + float", () => {
      assert.strictEqual(calculateNumber("SUM", 3.6, 5.0), 9);
    });
    it("string + float", () => {
      assert.strictEqual(calculateNumber("SUM", 3, 5.6), 9);
    });
  });
  describe("type === SUBTRACT", () => {
    it("positive numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.0, 2.0), 0);
    });
    it("negative numbers ", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.3, -1.8), 0);
    });

    it("negative and positive numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.0, 2.0), 4.0);
    });
  });
  describe("type === DIVIDE", () => {
    it("positive numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 8.0, 2.0), 4.0);
    });

    it("numbers with different signs", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -7.0, 2.0), -3.5);
    });

    it("positive number and number rounded to 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.0, -0.2), "Error");
    });
  });
});
