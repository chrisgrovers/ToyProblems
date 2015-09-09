// have the function StringScramble(str1,str2) take both parameters 
// being passed and return the string true if a portion of str1 characters can be rearranged to match str2,
 // otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output 
 // should return true. Punctuation and symbols will not be entered with the parameters. 


function StringScramble(str1,str2) { 

  // code goes here  
  str2 = str2.split('');
  str1 = str1.split('');
  var scrambled = true;

  for (var i = 0; i < str2.length; i++) {
    var index = str1.indexOf(str2[i]);
    if (index > -1) {
      str1.splice(index, 0);
    } else {
      scrambled = false;
    }
  }


  return scrambled; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
















                            
                            
                            
