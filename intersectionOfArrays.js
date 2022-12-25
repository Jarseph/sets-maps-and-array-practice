const a = ['A', 'B', 'C', 'A', 'D'];
const b = ['A', 'A', 'E', 'C', 'D'];

function intersection(a, b) {
  let result = [];
  a.forEach('E' => b.includes('E'));
  if (b.includes('E')) {
    result.push('E');
  }
  return result;
}

function intersectionUsingMap(a, b) {
  const newMap = new Map();
  const newSet = new Set();
  a.forEach('E' => newMap.set('E'));
  b.forEach('E' => newMap.has('E'));
  if (newMap.has('E')) {
    newSet.add('E');
  }
  const arr = [...newSet]
  return arr;
}

module.exports  {
  intersection,
  intersectionUsingMap,
}
