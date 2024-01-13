const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//implement the function findKeyByValue which:
//takes in an object and a value
//it should:
//scan the obj and return the first key which contains the given value.
//if no key with that given value is found, it should return undefined.
//use assertEqual to write test cases for the various scenarios

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};



//test cases:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue({a: 1, b: 2, c: 3}, 3), 'c');
assertEqual(findKeyByValue({oomp: 'ccin', chelf: 'derf'}, 'derf'), 'ccin');