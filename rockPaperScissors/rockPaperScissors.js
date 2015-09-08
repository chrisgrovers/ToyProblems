/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function () {
  // TODO: your solution here
  // have a base baseArray
  var combos = [];
  var playerChoice = ['rock', 'paper', 'scissors'];
  var numCombos = playerChoice.length * playerChoice.length * playerChoice.length;
  var first = 0;
  var second = 0;
  var third = -1;
  while (combos.length < numCombos) {
      // ideas: 
      // have an array at indexes starting at 0 [0, 0, 0]
      // when one spot is > 2, loop back to zero and iterate the next val [0, 0, 2] --> [0, 1, 0];
      // keep going until numCombos reaches 27??
    third++;
    if (third > 2) {
      third = 0;
      second++;
      if (second > 2) {
        second = 0;
        first++;
        if (first > 2)
          console.log('I think I did too many....');
      }
    }
    combos.push([playerChoice[first], playerChoice[third], playerChoice[third]]);
  //   // make an array with 3 strings ('rock', 'paper', or 'scissors')
  //   // creates an array with choices from playerChoice array at random indexes.
  //   function randomChoices() {
  //     var choices = [playerChoice[Math.floor(Math.random() * 3)], playerChoice[Math.floor(Math.random() * 3)], playerChoice[Math.floor(Math.random() * 3)]];
  //     var inArray = false;
  //     for (var i = 0; i < combos.length)
  //     if (combos.indexOf(choices) > -1) {
  //       // if array is in baseArray, change it.
  //       // test does not work for arrays. Currently searching how to fix this...
  //       choices = randomChoices();
  //     }
  //     return choices;
  //   }
  //   var randomCombo = randomChoices();
  //   // at this point, I should have an array that isn't in combos
  //   // push array to baseArray
  //   combos.push(randomCombo);
  // }
  }
  console.log(combos);
};

