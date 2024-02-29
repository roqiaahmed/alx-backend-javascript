const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calcul", () => {
  it("checks round", () => {
    assert.strictEqual(calculateNumber(-1, -2.7), -4);
  });
  it("checks round", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it("checks round", () => {
    assert.strictEqual(calculateNumber(-1.7, -2), -4);
  });
  it("checks round", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
