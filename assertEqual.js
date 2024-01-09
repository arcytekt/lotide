const assertEqual = function(actual, expected) {
  const pass = actual === expected;
  if (pass) {
    console.log("🛑🛑🛑 Assertion Passed: [" + actual + "] === [" + expected + "]");
  } else {
    console.log("✅✅✅ Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }
  return pass;
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);