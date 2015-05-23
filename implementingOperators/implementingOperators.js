// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // TODO: should return the product of x * y
    if (x === 0 || y === 0) {
        return 0;
    }
    var answer = 0;
    for (var i = 0; i < y; i++){
        console.log(answer, 'is now');
        answer += x;
        console.log(answer);
    }
    return answer;
};


var divide = function(x, y, places) {
// TODO: should return the dividend of x / y
//    places will be the limit on how many decimal places I check
        //need to do this 3 times... Or however long I decide!!
    places = places || 3;
    //decimals will be the current number of places I am checking
    var decimals = 0;
    if (x === 0 || y === 0) {
        return 0;
    }
    var divideAndConquer = function(numerator,demoninator) {
        var answer = 0;
        while (numerator >= demoninator) {
            numerator -= demoninator;
            answer++;
        }
        return answer;
    }
    var solution = divideAndConquer(x,y);
    //now make it return to 3 decimal places

    if (y > x && x !== 0) {
        //need to increase answer in a decimal place for each time I multiply by 10


    }

    return solution;
};
console.log(divide(5, 5), 'should be 1');
console.log(divide(10, 5), 'should be 2');
console.log(divide(5, 0), 'should be 0');
console.log(divide(2, 3), 'should be 0.667');


var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
    if (x === 0 || y === 0) {
        return 0;
    }
    var answer = 0;
    while (x >= y) {
        x -= y;
    }
    return x;
};
console.log(modulo(5, 5), 'should be 0');
console.log(modulo(12, 5), 'should be 2')
console.log(modulo(5, 0), 'should be 0');