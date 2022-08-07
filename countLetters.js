const assertEqual = require('./assertEqual');

const countLetters = function(word) {
  let count = {};

  for (const char of word) {

    if (count[char]) {
      console.log(count[char]);
      count[char] += 1;
    } else {
      console.log("false");
      count[char] = 1;
    }
  }

  return count;
}

console.log(countLetters("potato"));