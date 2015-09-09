/*
have the function CaesarCipher(str,num) take the str parameter and 
perform a Caesar Cipher shift on it using the num parameter as the 
shifting number. A Caesar Cipher works by shifting each letter in the 
string N places down in the alphabet (in this case N will be num). 
Punctuation, spaces, and capitalization should remain intact. For 
example if the string is "Caesar Cipher" and num is 2 the output 
should be "Ecguct Ekrjgt". 
*/



function CaesarCipher(str,num) { 

  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  var newStr = '';
  var ind = function(letter) {
    var cap = false;
    if (upper.indexOf(letter) > -1) {
      cap = true;
      var newLetter = upper.indexOf(letter) + num;
      if (newLetter >= 26) {
          newLetter -= 26;
      }
    }
    else {
      var newLetter = lower.indexOf(letter) + num;
      if (newLetter>= 26) {
        newLetter -= 26;
      }
    }
    return cap ? upper[newLetter] : lower[newLetter] ;
    
  };
  
  for (var i = 0; i < str.length; i++) {
    newStr += ind(str[i]);

  };
  
  return newStr;
         
}

console.log(CaesarCipher('Hello',4), 'should be Lipps');
console.log(CaesarCipher('abc',0), 'should be abc');
console.log(CaesarCipher('xyz', 3), 'should be abc');