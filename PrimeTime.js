/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // prime numbers can't be divisible by 2. Auto check!
  if (n % 2 === 0 && n > 2) {
    return false;
  }
  // add an array that stores prime numbers and checks if divisible by any of the prime numbers???
  // start at half the number and iterate down from there
  var start = Math.round(n/2);
  for (var i = start; i > 2; i--) {
    if (n % i === 0) {
      // TODO: return true if n is prime, false otherwise
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  var primes = [];
  for (var i = start; i < end; i++){
    if (primeTester(i)) {
      primes.push(i);
    }
  }
  return primes;
};


