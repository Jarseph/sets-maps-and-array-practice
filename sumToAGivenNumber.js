const arr = [3, 2, 4, 6, 7, 5];
const givenNumber = 10;

function sumToAGivenNumber(arr, givenNumber) {
  arr.forEach((i) => {
    arr.forEach((j) => {
      if (i !== j) {
        if (i + j === givenNumber) {
          return [i, j];
        }
      }
    });
  });
}

function sumToAGivenNumberUsingMap(arr, givenNumber) {
  const numbers = new Map();
  const solutions = new Map();
  arr.forEach((e) => numbers.add(e));
  arr.forEach((e) => {
    const diff = givenNumber - e;
    if (diff !== e) {
      if (numbers.has(diff)) {
        solutions.add([e, diff]);
      }
    }
  })
  const solutionsArray = [...solutions]
  return solutionsArray;
}

module.exports = {
  sumToAGivenNumber,
  sumToAGivenNumberUsingMap,
}

