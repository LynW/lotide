const eqArrays = function(array1, array2) {

  let result = false;

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  
  return result;

};

const assertArraysEqual = function(actual, expected) {

  let result = false;

  if (eqArrays(actual, expected)) {
    result = true;
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    result = false;
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }

  return result;

};


const letterPositions = function(sentence) {
  const results = {};
  let i = 0;

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push[i];
      } else {
        results[letter] = [i];
      }
    }
    i ++;
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);