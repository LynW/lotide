const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  
  let result = false;

  if (eqObjects(actual, expected)) {
    result = true;
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    result = false;
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

  return result;

};

module.exports = assertObjectsEqual;