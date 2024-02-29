function calculateNumber(type, a, b) {
  const br = Math.round(b);
  const ar = Math.round(a);
  if (type === "SUM") {
    return br + ar;
  }
  if (type === "SUBTRACT") {
    return br - ar;
  }
  if (type === "DIVIDE") {
    return br === 0 ? "Error" : ar / br;
  }
  return 0;
}
module.exports = calculateNumber;
