const assertEqual = function(actual, expected) {
  const pass = actual === expected;
  if (pass) {
    console.log("✅✅✅ Assertion Passed: [" + actual + "] === [" + expected + "]");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("test", "test");