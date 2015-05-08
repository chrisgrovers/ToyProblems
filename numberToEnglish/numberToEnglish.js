/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // return my value as english words
  // check this length
  // helper function and recurse for each spot?
  // for loop?

  // var string = '';
  // var eachSpot = function(number) {
  //   if (number < 20) {
  //     string+= numbersToWords[number];
  //   } else if (number < 100) {
  //     string+=numbersToWords[number.toString()[0] + '0'] + ' ';

  //     eachSpot(number.toString().slice(1));
  //   } else if (number < 1000) {
  //     string+=numbersToWords[number.toString()[0] + '0'] + ' ';
  //     eachSpot(number.toString().slice(1));
  //   }
  // }

  // NOT ENOUGH TIME, BUT I JUST REMEMBERED WHAT A MODULO IS, AND THAT I SHOULD USE IT!!!!!!!!!!!
  var thePhoenix = '';
  var numberString = number.toString()
  for (var i = 0; i < numberString.lenght; i++) {
    if (number < 20) {
      thePhoenix += numbersToWords[number];
    }
    // find a number that is less than ten, and work from there. Iterate through each spot... Don't have enough time to 
    // put what is going on in my head into words or code, but I am pretty confident I am on to something
    for (var tens in numbersToWords) {
      if (number % tens < 10) {
        console.log(number);
      }
    }

  }
  console.log(thePhoenix);
  // eachSpot(this);
  // return string;
};
