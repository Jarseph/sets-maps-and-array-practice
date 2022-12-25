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
  for (let e of A) {
    numbers.set(e, e);
  }
  for (let e of A) {
    let diff = N - e;
    if (diff !== e) {
      if (numbers.has(diff)) {
        solution.set(Math.min(e, diff), Math.max(e, diff));
      }
    }
  }

  return Array.from(solution);
}

module.exports = {
  sumToAGivenNumber,
  sumToAGivenNumberUsingMap,
}

