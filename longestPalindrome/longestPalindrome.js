/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {

  var longestPal = '';

  // function to detect palindromes
  var palindromeChecker = function(value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] !== value[value.length - 1 - i]){
        return false;
      }
    }
    return true;
  }

  // ITERATION IS SO GOOD AND ELEGANT
  // starting at index 0, check if palindrome with every length of the string
  for (var j = 0; j < string.length; j++) {
    // check each value of the string after j, if it matches j, check if palindrome
    for (var k = j+1; k < string.length; k++) {

      if (string[j] === string[k]) {

        var stringToTest = string.slice(j, k + 1);
        if (palindromeChecker(stringToTest)) {

          if (stringToTest.length > longestPal.length) {
            longestPal = stringToTest;
          }
        }
      }
    }
  };
  return longestPal;
};

/*
* find longest centered palindrome
*
* */
