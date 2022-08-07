const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,4]);