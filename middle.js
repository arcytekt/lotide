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
};

//implement the function "middle" which will:
//take in an array and return the middle-most element(s) of the given array
//middle should return an array with only the middle element(s) - this means that the length of the returned elements could vary.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd numbers of elements, an array containing a single middle element should be returned.
//For arrays with even numbers of elements, an array containing two elements in the middle should be returned.
//Write test assertions with assertArraysEqual


const middle = function(array) {
  let result = [];
  if (array.length < 2) {
    return result;
  }
  if (array.length % 2 !== 0) {
    result.push(array[Math.floor(array.length / 2)]);
  } else {
    result.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return result;
};


//test cases:
assertArraysEqual(middle([0, 1, 2]), [1]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
