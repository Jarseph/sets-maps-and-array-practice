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
  const map = new Map();
  const results = new Set();
  for (let e of a) {
    map.set(e, e);
  }
  for (let e of b) {
    if (map.has(e)) {
      results.add(e);
    }
  }
  return Array.from(results);
}

module.exports  {
  intersection,
  intersectionUsingMap,
}
