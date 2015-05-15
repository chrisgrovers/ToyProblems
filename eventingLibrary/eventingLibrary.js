/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  // TODO: Your code here
  // add an on event??
  this.listeners = {};


  obj.on = function(listener, callback) {
    // set up a "Listener" event... If this is "triggered", then do the callback
    // listener will normally be false??
    // right now, this "on" is "triggered" on instantiation.
    // if I set listener to false, how do I change it when trigger?
    listeners[listener] = callback;
  }

  //add a trigger event??
  obj.trigger = function(listener) {
    // put obj.on here??
    // have a list of triggers/listeners??
    listeners[listener]();
    // account for multiple args
    var args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < args.length; i++) {
      listeners[args[i]]();
    }
  }

  return obj;
};
