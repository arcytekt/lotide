const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 'Lighthouse' for ['Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Lighthouse", "Labs"]), "Lighthouse");
  });

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns 'test' for ['test', 'case']", () => {
    assert.strictEqual(head(["test", "case"]), "test");
  });
});