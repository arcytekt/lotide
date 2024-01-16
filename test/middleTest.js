// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// assertArraysEqual(middle([0, 1, 2]), [1]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1]), []);

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("should return [1] for input [0, 1, 2]", () => {
    assert.deepEqual(middle([0, 1, 2]), [1]);
  });

  it("should return [2, 3] for input [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return an empty array for input [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [2] for input [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});