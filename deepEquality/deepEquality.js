/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  // comparing apples to oranges?!?!?
  var theSame = true;
  var renderRecurse = function(tomato, potato) {

    if (typeof tomato === 'number' || typeof potato === 'string') {
      if (tomato !== potato) {
        theSame = false;
      }
    }

    if (typeof apple === 'object') {
      for (var key in tomato) {
        if (!(potato[key])) {
          return theSame = false;
        }
        renderRecurse(tomato[key], potato[key])
      }
    }
    
  }

  renderRecurse(apple, orange);

  return theSame

};
