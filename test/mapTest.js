
const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["ground", "control", "to", "major", "tommy"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[3]);
console.log(results1);


assertArraysEqual(results1,['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2,['r', 'o', , 'a', 'o']);
assertArraysEqual(results3,['u', 't', , 'o', 'm']);