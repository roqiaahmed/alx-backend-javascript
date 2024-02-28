const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calcul", () => {
  it("checks round", () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("checks round", () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("checks round", () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("checks round", () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
