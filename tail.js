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


const tail = function(arrayList) {

  let finalArray = [];

  if (arrayList.length <= 1) {
    return finalArray;
  }

  for (let i = 1; i < arrayList.length; i++) {
    finalArray.push(arrayList[i]);
  }

  return finalArray;

};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!