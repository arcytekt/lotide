//Our new assertion function should ideally leverage this function as well.
//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
//Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
//we will not be writing assertions (test code) for assertArraysEqual. That said, you can and should call the function below its declaration and visually ensure that the message printed to the console is accurate.


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

//test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);// => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]);// => should FAIL