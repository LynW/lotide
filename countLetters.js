const assertEqual = function(actual, expected) {

  let result = false;

  if (actual === expected) {
    result = true;
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    result = false;
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

  return result;

};

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