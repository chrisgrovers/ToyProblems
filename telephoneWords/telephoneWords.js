/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits

  var wordCombo = [];
  // takes up to 4 digits of a number
  // helper function that iterates through the letters
  var findCombos = function(wordSalad) {
    debugger;
    var holder = wordSalad.slice();
    var saladString = '';
    if (wordSalad.length === 1){
      for (var j = 0; j < phoneDigitsToLetters[holder]; j++) {
        return phoneDigitsToLetters[holder][j];
      }
    }
    // iterate through each letter for the first number in wordSalad
    for (var i = 0; i < phoneDigitsToLetters[holder[0]].length; i++) {
      saladString += (phoneDigitsToLetters[holder[0]][i])
      console.log(phoneDigitsToLetters[holder[0]][i])
      findCombos(holder.slice(1))
      // it is only adding each letter for the first number....
    }
    wordCombo.push(saladString);
    
  }

  
  findCombos(digitString);
  // returns a list of all words that can be written (all permutations)
  return wordCombo
};
