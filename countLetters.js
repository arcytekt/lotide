const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


// Implement a function called countLetters.
// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
// Before implementing this function, we need to think about how it will report back these counts.
// It's not that we want to know how many H's are in this sentence? because that would just be a number.
// We need it to report back multiple numbers.
// It could return an object where each unique character encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.
// skip spaces.
// we shall use a for of loop to iterate through the string.


const countLetters = function(string) {
  const results = {};
    for (const letter of string) {
      if (letter !== " ") {
        if (results[letter]) {
          results[letter] += 1;
        } else {
          results[letter] = 1;
        }
      }
    }

  return results;

};

const result = countLetters('LHL');
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);

console.log(countLetters("lighthauss"));
