const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['cow','rabbit'] for ['chicken', 'cow', 'rabbit']", () => {
    const farm = ['chicken', 'cow', 'rabbit'];
    assert.deepEqual(tail(farm), ['cow','rabbit']);
  });
  it("returns ['idaho', 'russett'] for ['yukon', 'idaho', 'russett']", () => {
    const potato = ['yukon', 'idaho', 'russett'];
    assert.deepEqual(tail(potato), ['idaho', 'russett']);
  });
  it("returns [2,3,4,5,6] for [1,2,3,4,5,6]", () => {
    const potato = [1,2,3,4,5,6];
    assert.deepEqual(tail(potato), [2,3,4,5,6]);
  });
});