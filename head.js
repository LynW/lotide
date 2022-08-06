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


const head = function(arrayList) {

  return arrayList[0];

};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");