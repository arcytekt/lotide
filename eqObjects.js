const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  //obj 1 & obj 2 are equal when:
  //they have same number of keys
  //The value for each key in each object is the same
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const element of keys1) {
    const value1 = object1[element];
    const value2 = object2[element];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

//test cases
const hamsterObject = { color: "Panda", size: "Hughmungus" };
const cattoObject = { personality: "Evil", size: "Microscopic" };
eqObjects(hamsterObject, cattoObject); //should be false
assertEqual(eqObjects(hamsterObject, cattoObject), false);

const geckoObject = { color: "Panda", size: "Hughmungus" };
eqObjects(hamsterObject, geckoObject); //should be true
assertEqual(eqObjects(hamsterObject, geckoObject), true);

//array test cases:
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);