const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(without([9, 1, 2, 3, 1,90,1,2,323,43254], [1,2]),[ 9, 3, 90, 323, 43254 ]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);