const eqArrays = require('./eqArrays');



const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let item of Object.keys(object1)) {
    if (Array.isArray(object1) && Array.isArray(object2)) {
      const compare = eqArrays(object1[item], object2[item]);
      if (!compare || (object1[item] !== object2[item])) {
        return false;
      }
    }
  }
  return true;
};

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
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertObjectsEqual(eqObjects(ab, ba), true);
// assertObjectsEqual(eqObjects(ab, abc), false);