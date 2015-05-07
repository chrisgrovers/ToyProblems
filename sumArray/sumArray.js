/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
// working.... Now to clean up!
var sumArray = function(array) {
  // use reduce function??
  
  // current sum array
  var sumArray = [];
  var greatest = null;
  // iterate through array
  for (var i = 0; i < array.length; i++) {
    // add value to all values in sumArray??
    if (array[i] > greatest) {
      greatest = array[i];
    }
    for (var j = 0; j < sumArray.length; j++) {
      sumArray[j]+=array[i];
      if (sumArray[j] > greatest) {
        greatest = sumArray[j];
      }
    }
    sumArray.push(array[i]);
  }
  console.log(sumArray);
  return greatest;
};