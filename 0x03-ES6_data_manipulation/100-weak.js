export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  let calls = weakMap.get(endpoint) || 0;
  calls += 1;
  if (calls >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, calls);
  return calls;
}
