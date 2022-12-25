const a = ['A', 'B', 'C', 'A', 'D'];
const b = ['A', 'A', 'E', 'C', 'D'];

function intersection(a, b) {
  let result = [];
  a.forEach((e) => b.includes(e));
  if (b.includes(e)) {
    result.push(e);
  }
  return result;
}

function intersectionUsingMap(a, b) {
  const newMap = new Map();
  const newSet = new Set();
  a.forEach((e) => newMap.set(e));
  b.forEach((e) => newMap.has(e));
  if (newMap.has(e)) {
    newSet.add(e);
  }
  const arr = [...newSet]
  return arr;
}

module.exports  {
  intersection,
  intersectionUsingMap,
}
