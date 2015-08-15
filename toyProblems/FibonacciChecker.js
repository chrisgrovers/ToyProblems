var FibonacciChecker = function(n) {
  var fibArr = [];
  for (var i = 0; i <= n; i++) {
    if (i === 0) {
      fibArr.push(0);
    } else if (i === 1) {
      fibArr.push(1);
    } else {
      fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    }
  }
  return fibArr.pop();
  
}
