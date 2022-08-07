const eqArrays = require('./eqArrays');

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

module.exports = assertArraysEqual;

