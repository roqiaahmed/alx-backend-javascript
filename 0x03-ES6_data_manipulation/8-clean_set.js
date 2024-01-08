export default function cleanSet(set, startString) {
  if (startString === "" || startString === undefined) {
    return "";
  }
  const test = new Set();

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      test.add(element.slice(startString.length));
    }
  });
  return Array.from(test).join("-");
}
