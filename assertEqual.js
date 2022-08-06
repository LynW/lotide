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
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);