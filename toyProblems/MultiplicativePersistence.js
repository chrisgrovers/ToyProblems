function MultiplicativePersistence(num) { 

  // code goes here  
  var count = 0;
  while (num>=10){
    num = num.toString().split('');
    var newAnswer = 1;
    for (var i =0;i<num.length;i++){
      newAnswer*=num[i];
    }
    num = newAnswer;
    count++;
  }
  return count; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           
