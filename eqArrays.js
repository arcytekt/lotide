//implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
//use assertEqual to write test cases for various scenarios.
//The tests can be written below the definition of your function.
//Here are some sample tests:
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS

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

module.exports = eqArrays;