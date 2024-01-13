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


// create letterPositions, a function of sentence.
// create empty object to store the results (position of letters)
// loop through each letter of the sentence
// if letter is not a space, then move on
// check if the letter is already a property in results
// if it is - push current index into array associated with it's letter
// if it is not - create new array with the current index and assign it's letter to it in 'results'
// return 'results'



const letterPositions = function(sentence) {
  const results = {};
    for (let i = 0; i < sentence.length; i++) {
      const letter = sentence[i];
      if (letter !== " ") {
        if (results[letter]) {
        results[letter].push(i);
       } else {
        results[letter] = [i];
       }
      }
    }
  return results;
};


assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
