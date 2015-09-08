/*SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. */


function SimpleMode(arr) { 
  var mode = -1;
  var modeCount = 0;
  var test = arr.slice();
  while (test.length > 0) {
    var curr = test.shift();
    var currCount = 0;
    for (var i = 0; i < arr.length; i++) {
      if (curr === test[i]) {
        arr.splice(i, 1);
        currCount++;
        if (currCount > modeCount) {
          modeCount = currCount;
          mode = curr;
        }
      }
    }
  }
  return mode;
}
   
console.log(SimpleMode([5,5,2,2,1]), 'should be 5');
console.log(SimpleMode([3,4,1,6,10]), 'should be -1');
console.log(SimpleMode([1,2,2,3]), 'should be 2');
console.log(SimpleMode([4,5,1,6,7,8,100,200,1000,5]), 'should be 5');
console.log(SimpleMode([4,4,5,6,7,8,8,8,8,8]), 'should be 8');
console.log(SimpleMode([4,5,6,1,2,4]), 'should be 4');



