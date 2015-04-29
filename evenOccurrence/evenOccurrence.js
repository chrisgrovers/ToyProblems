/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  // store numOccurences with a key(the number) and a value (number of occurences)
  // var occurrences = [{1:1}];
  
  // iterate through the arr, and store the numbers with numOccurence in occurrences
  // for (var i = 0; i < arr.length; i++) {
  //   var matched = false;
  //   // search array for an object with matching key
  //   if (!matched) {
  //     for (var j = 0; j < occurrences.length; j++) {
  //       console.log(occurrences);
  //       if (occurrences[j])
  //     }
  //   } else {
  //     occurrences[arr[i]] = 1;
  //   }
  // }
  // for (var j = 0; j < occurrences.length; j++) {
    
  // }
  // return occurrences;

  // Your code here.
  // store numOccurences with a key(the number) and a value (number of occurences)
  var occurrences = {};
  
  // iterate through the arr, and store the numbers with numOccurence in occurrences
  for (var i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]]) {
      occurrences[arr[i]]++;
    } else {
      occurrences[arr[i]] = 1;
    }
  }
  for (var key in occurrences) {
    // iterate through occurrences, looking for an even value stored at key
    if (occurrences[key] % 2 === 0) {
      // if it's even, terminate the for loop and console.log the key(which should be the first even occurrence).
      console.log(key);
      return;
    }
  }
  // return occurrences;
};
