// const tail = require('../tail');
// const assertEqual = require('../assertEqual')

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(words).length, words.length - 1) // tail should have one element less than its input
// assertEqual(tail(["test"]).length, 0) // tail of array with one element only should be empty
// assertEqual(tail([]).length, 0) // tail of an empty array should also be empty

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("should not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("should have one element less than its input array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, words.length - 1);
  });

  it("should have an empty array when the input array has one element", () => {
    const result = tail(["test"]);
    assert.strictEqual(result.length, 0);
  });

  it("should have an empty array when the input array is empty", () => {
    const result = tail([]);
    assert.strictEqual(result.length, 0);
  });
});