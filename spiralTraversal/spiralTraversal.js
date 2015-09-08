/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
  var results = [];
  var topArray = function(fullArray) {
    var top = fullArray.unshift();
    for (var i = 0; i < top.length; i++) {
      results.push(top[i]);
    }
  }

  var lastEl = function(fullArray) {
    for (var j = 0; j < fullArray.length; j++) {
      var last = fullArray[j].pop();
      results.push(last);
    }
  }

  var botArray = function(fullArray) {
    var bot = fullArray.pop();
    console.log(bot);
    for (var k = bot.length; k >= 0; k--) {
      results.push(bot[k]);
    }
  }

    var firstEl = function(fullArray) {
    for (var l = 0; l < fullArray.length; l++) {
      var first = fullArray[l].unshift();
      results.push(first);
    }
  }

  // TODO: Implement me!
  // first go right -> iterate down -> iterate to left -> iterate up til before top row -> right til last column ... so on... repeat...
  // only need to write functions for rightt, down, left up. Can possibly delete elements in matrix when I iterate, so I don't have to worry about repeating.
  while (matrix) {
  // step 1: I can probably just copy the first row into my results array(shift?)
    topArray(matrix);
  // step 2:need the last element for each row
    lastEl(matrix);
  // step 3: pop last array, and reverse
    botArray(matrix);
  // step for: shift the first element out of each row.
    firstEl(matrix);
  // repeat.
  }


  return results;
};
// 