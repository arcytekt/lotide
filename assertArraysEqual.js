//Our new assertion function should ideally leverage this function as well.
//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
//Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
//we will not be writing assertions (test code) for assertArraysEqual. That said, you can and should call the function below its declaration and visually ensure that the message printed to the console is accurate.


const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
}

module.exports = assertArraysEqual;