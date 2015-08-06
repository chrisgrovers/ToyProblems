/*have the function CountingMinutes(str) take the str parameter being 
passed which will be two times (each properly formatted with a colon 
and am or pm) separated by a hyphen and return the total number of 
minutes between the two times. The time will be in a 12 hour clock 
format. For example: if str is 9:00am-10:00am then the output should 
be 60. If str is 1:00pm-11:00am the output should be 1320. */

function CountingMinutes(str) { 

  var to24 = function(time) {
    var colon = time.indexOf(':');
    // need to convert to int in order to add 12 hours if necessary
    hour = parseInt(time.slice(0, colon));
    minutes =  parseInt(time.slice(colon + 1, colon + 3));
    var ampm = time.slice(colon + 3);
    console.log('ampm is', ampm)
    if (ampm === 'pm') {
      hour += 11;
    }
    console.log('time and hour in to24', time, hour)
    var timeObj = {
      hour: hour,
      minutes: minutes
    }
    return timeObj;
  }

  var countMinutes = function(time1, time2) {
    console.log(time1, time2);
    if (time1.hour < time2.hour) {
      time1.hour += 24
    }
    timeA = time1.hour * 60 + time1.minutes;
    timeB = time2.hour * 60 + time2.minutes;
    console.log('time a', timeA, 'time b', timeB);
    return timeA - timeB;
  }

  var minutes = 0;
  var times = str.split('-');
  var first = to24(times[0]);
  var second = to24(times[1]);

  return countMinutes(first, second); 
         
}
   

// console.log(CountingMinutes('12:30pm-12:00am') + ' should be 690');
console.log(CountingMinutes('1:23am-1:08am') + ' should be 1425');
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
// CountingMinutes(readline());                            
