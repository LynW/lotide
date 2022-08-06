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

const without = function(source, itemsToRemove) {

  for (let i = 0; i < source.length - 1; i++) {

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;

};

console.log(without([9, 1, 2, 3, 1,90,1,2,323,43254], [1,2]));

assertArraysEqual(without([9, 1, 2, 3, 1,90,1,2,323,43254], [1,2]),[ 9, 3, 90, 323, 43254 ]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);