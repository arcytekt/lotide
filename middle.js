//implement the function "middle" which will:
//take in an array and return the middle-most element(s) of the given array
//middle should return an array with only the middle element(s) - this means that the length of the returned elements could vary.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd numbers of elements, an array containing a single middle element should be returned.
//For arrays with even numbers of elements, an array containing two elements in the middle should be returned.
//Write test assertions with assertArraysEqual


const middle = function(array) {
  let result = [];
  if (array.length <= 2) {
    return result;
  }
  if (array.length % 2 !== 0) {
    result.push(array[Math.floor(array.length / 2)]);
  } else {
    result.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return result;
};

module.exports = middle;
