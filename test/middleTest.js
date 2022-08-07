const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it("return [3] for [1,2,3,4,5]", () => {
    assert.deepStrictEqual(middle([1,2,3,4,5]), [3]);
  });
  it("return [3,4] for [1,2,3,4,5,6 ]", () => {
    assert.deepStrictEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it("return [] for [1,2]", () => {
    assert.deepStrictEqual(middle([1,2]), []);
  });
  it("return [] for [1]", () => {
    assert.deepStrictEqual(middle([1]), []);
  });
});