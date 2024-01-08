export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const view = new Int8Array(buffer);
    view[position] = value;
    return new DataView(buffer);
  } catch (error) {
    throw Error("Position outside range");
  }
}
