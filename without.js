//implement the function without, which will return a subset of a given array, removing unwanted elements
//this function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
//Here are a couple examples, but please don't limit your testing to just these scenarios:
//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
//The tests can be written below the definition of your function.
//It's okay for without to not function correctly when using nested arrays or arrays of objects.
//Write a test case to make sure that the original array is not modified.
//For the sake of simplicity, the comparison will only be one level deep.
//Among your test cases, be sure to include an important test that is easy to overlook: The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:


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

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
}

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
}


//test cases
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);