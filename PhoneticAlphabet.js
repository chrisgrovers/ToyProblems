/*Create a function that converts a string to the miliatries phonetic alphabet*/

var phonAlpha = function(string) {

  var phonePron = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu'
  };

  var stringArr = string.split('');

  for (var i = 0; i < stringArr.length; i++) {
    stringArr[i] = phonePron[stringArr[i].toLowerCase()];
  }


  return stringArr.join(' ');

}

console.log(phonAlpha('alpha'), 'from alpha');
console.log(phonAlpha('Bravo'), 'from Bravo');
console.log(phonAlpha('becky'), 'from becky');
console.log(phonAlpha('norm'), 'from norm');