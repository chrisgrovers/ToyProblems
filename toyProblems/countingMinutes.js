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
    if (ampm === 'pm' && hour != 12) {
      hour += 12;
    } else if (ampm == 'am' && hour === 12) {
      hour -= 12;
    }
    var timeObj = {
      hour: hour,
      minutes: minutes
    }
    return timeObj;
  }

  var countMinutes = function(time1, time2) {
    // console.log('time1', time1, 'time2',  time2);
    timeA = time1.hour * 60 + time1.minutes;
    timeB = time2.hour * 60 + time2.minutes;
    // console.log('time a', timeA, 'time b', timeB);
    if (timeA > timeB) {
      minutes += 24 * 60;
    }
    // console.log('time a', timeA, 'time b', timeB);
    minutes += timeB - timeA;
  }

  var minutes = 0;
  var times = str.split('-');
  var first = to24(times[0]);
  var second = to24(times[1]);
  countMinutes(first, second);
  return minutes;
         
}
   

console.log(CountingMinutes('12:30pm-12:00am') + ' should be 690');
console.log(CountingMinutes('1:23am-1:08am"') + ' should be 1425');
console.log(CountingMinutes('9:00am-10:00am') + ' should be 60');
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
// CountingMinutes(readline());                            
