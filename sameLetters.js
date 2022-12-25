const words = ["pair", "per", "pole", "pear", "peer", "reap", "lope"];

function sameLetters(words) {
  const results = new Map();
  words.forEach((word) => {
    let distinctLetters = Array.from(new Set(word.split("")))
      .sort()
      .join("");
    if (results.has(distinctLetters)) {
      results.get(distinctLetters).push(word);
    } else {
      results.set(distinctLetters, [word]);
    }
  });
  return results;
}

module.exports = sameLetters;
