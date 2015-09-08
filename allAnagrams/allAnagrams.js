/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  // npm install -g underscore
var allAnagrams = function(string) {
  // Your code here.
  var anArray = [];

  // calculate how many combinations I can have
  var maxNum = function(number) {
    if (number === 1) {
      return 1;
    }
    return number * maxNum(number - 1);
  };
  var numCombo = maxNum(string.length);
  console.log(numCombo);

  var shuffleString = function(letters) {

  };

  // similar to rock paper scissors code??
  var newString = '';

  var stringCombo(letters) {
    // if newString is as long as string length
    if (newString.length === string.length) {
      anArray.push(newString);
      newString = 
    }

    for (var i = 0; i < letters.length; i++) {
      // would be similar to rock paper scissors, but I need to pull one letter out of the letters string, since I can only use each letter in string once.
      var word = letters.slice(i, 0);

    }
  }

  // need to push all permutations of string into anArray;
  while (anArray.length < numCombo) {
    // need to shuffle the string
    // or I can just recurse on each letter in the string and make a different combo with each letter....??
    // or I can commit to one idea and actually get working code...




    // if the shuffled string is already in anArray, shuffle again.
    // while ()
  }

  return anArray;
};
