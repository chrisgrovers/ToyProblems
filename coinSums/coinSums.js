/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total){
  // STUFF WE KNOW:
  // have a counter for number of ways to make change
  var numChange = 0;

  // different currency in pence
  var currenC = [1, 2, 5, 10, 20, 50, 100, 200];
  var currenCrecurse = function(curTotal) {
    console.log(curTotal, currency);
    // iterate through each ammount of currency, and I will need to recurse
    for (var i = 0; i < currenC.length; i++) {
      console.log("curTotal", curTotal, "currenC[i]:", currenC[i]);
      // if the current total is less than the current currency (heh) then get what's left over
      // if the left over ammount is 0, then increment the numChange by one
      if (curTotal % currenC[i] === 0 && curTotal > 0) {
        console.log("added");
        numChange++;
      } else if (currenC[i] < curTotal) {
        // should I not let the function use the same currency more than once? 
        // I need more time to play with this thought...
        currenCrecurse(curTotal % currenC[i], currency.shift());
      }
    }
  }
  // logs the different ammounts in different orders... Not quite what I need....
  currenCrecurse(total, currenC);

  return numChange
};


