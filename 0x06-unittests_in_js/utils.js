const Utils = {
  calculateNumber(type, a, b) {
    let br = Math.round(b);
    let ar = Math.round(a);
    if (type === "SUM") {
      return br + ar;
    }
    if (type === "SUBTRACT") {
      return br - ar;
    }
    if (type === "DIVIDE") {
      return br === 0 ? "Error" : ar / br;
    }
  },
};

module.exports = Utils;
