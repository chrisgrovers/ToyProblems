/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var holder = {};
  // iterate through each character in string
  for (var i = 0; i < string.length; i++) {
    // push the character as a key, if there is already that key in holder array, add value to it
    if (holder[string[i]]) {
      holder[string[i]]++;
    } else {
      holder[string[i]] = 1;
    }
  }
  var result = [];
  for (var key in holder) {
    // puts all values in holder to result array, for easier sorting
    console.log(key, holder[key]);
    result.push([key, holder[key]]);
  }

  for (var j = 0; j < result.length; j++) {
    var val = result[j][1];
    var key = result[j][0];
    var hole = j;
    if (result[j-1] && val === result[j-1][1]) {
      while (hole && key > result[hole - 1][0]) {
        result[hole] = result[hole-1];
      }
    }
    while (hole && val > result[hole-1][1]) {
      result[hole] = result[hole-1];
      hole-=1;
    }
  }
  console.log(result);
  return result;
};