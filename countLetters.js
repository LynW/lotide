const countLetters = function(word) {

  let count = {};

  for (const char of word) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  return count;

};

module.exports = countLetters;