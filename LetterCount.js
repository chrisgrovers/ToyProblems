/* have the function LetterCount(str) take the str parameter being passed
 and return the first word with the greatest number of repeated letters. 
 For example: "Today, is the greatest day ever!" should return greatest
  because it has 2 e's (and 2 t's) and it comes before ever which also has 
  2 e's. If there are no words with repeating letters return -1. Words will be
   separated by spaces. */

function LetterCount(str) {
  var words = str.split(' ');
  var repeats = -1;
  var numRepeat = 0;
  for (var i = 0; i < words.length; i++) {
    var currWord = words[i].toLowerCase();
    while (currWord.length > 0) {
      var currRepeat = 0;
      var currLetter = currWord[0];
      currWord = currWord.slice(1);
      while (currWord.indexOf(currLetter) > -1) {
        currRepeat++;
        currWord = currWord.slice(0, currWord.indexOf(currLetter)) + currWord.slice(currWord.indexOf(currLetter) + 1);
      }
      if (currRepeat > numRepeat) {
        repeats = words[i];
        numRepeat = currRepeat;
      }
    }
  }  

  return repeats;
}

console.log(LetterCount('Hello apple pie'), 'should be Hello');
console.log(LetterCount('No words'), 'should be -1');
