/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */



var largestProductOfThree = function(array) {
  var product = 1;
  var numNeg = 0;
  // TODO: everything
// npm install all
// bower install everything_else



  
  // working solution
  // sort input array
  var sortArray = array.slice().sort(function(x, y) {return (y - x)})
  // iterate through the first/last 3 numbers, and add them to product
  for (var i = 0; i < 3; i++) {
    product *= sortArray[i]
  }

  // implementing negative numbers
  // var sortArray = array.slice().sort(function(x, y) {return (y - x)})
  // // .map(function(kerrVal) {
  // for (var j = sortArray.length - 1; j > 0; j--) {
  //   var kerrVal = sortArray[j];
  //   console.log('kerrVal is', kerrVal)
  //   if (kerrVal < 0) {
  //     numNeg++;
  //   } else {
  //     break;
  //   }
  // //   console.log('kerrVal is', kerrVal)
  // //   return {kerrVal}
  // }
  console.log('sortArray is', sortArray);

  return product;
};


console.log(largestProductOfThree([2, 1, 3, 7]), 'should be 42');
console.log(largestProductOfThree([2, 1, 2, 3]), 'should be 12');
console.log(largestProductOfThree([-5, -1, -3, 1]), 'should be 15');
// console.log(largestProductOfThree([2, 1, 3, 7]), 'should be 42');