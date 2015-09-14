/*have the function ThreeFiveMultiples(num) return the sum of all the 
multiples of 3 and 5 that are below num. For example: if num is 10, the 
multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding 
them up you get 23, so your program should return 23. The integer 
being passed will be between 1 and 100. */

function ThreeFiveMultiples(num) { 
  var five = 0;
  var three = 0;
  var ansArr = [];
  var ans = 0;
  var lessThan = true;

  while (lessThan) {
    five += 5;
    three += 3;

    if (five < num && ansArr.indexOf(five) < 0) {
      ans += five;
      ansArr.push(five);
    }
    if (three < num && ansArr.indexOf(three) < 0) {
      ans += three;
      ansArr.push(three);
    }
    if (five >= num && three >=num) {
      lessThan = false;
    }
  }
  return ans;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down

// ThreeFiveMultiples(readline());                            

console.log(ThreeFiveMultiples(10), 'should be 23')
console.log(ThreeFiveMultiples(6), 'should be 8')
console.log(ThreeFiveMultiples(1), 'should be 0')
console.log(ThreeFiveMultiples(31), 'should be 225')
console.log(ThreeFiveMultiples(17), 'should be 60')