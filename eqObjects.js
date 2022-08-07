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


const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let item of Object.keys(object1)) {
    if (Array.isArray(object1) && Array.isArray(object2)) {
      const compare = eqArrays(object1[item], object2[item]);
      if (!compare || (object1[letter] !== object2[letter])) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false