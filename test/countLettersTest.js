const assertObjectsEqual = require('../assertObjectsEqual');
const countLetters = require('../countLetters');
const eqObjects = require('../eqObjects');

let chicken = {
  c: "2",
  h: "1",
  i: "1",
  k: "1",
  e: "1",
  n: "1"
};

let blank = {};

let lhl = {
  l: "1",
  i: "1",
  g: "1",
  h: "2",
  t: "1",
  o: "1",
  u: "1",
  s: "1",
  e: "1",
}

assertObjectsEqual(eqObjects(countLetters('chicken'), chicken), true);
assertObjectsEqual(eqObjects(countLetters(''), blank), true);
assertObjectsEqual(eqObjects(countLetters('lighthouse'), lhl), true);