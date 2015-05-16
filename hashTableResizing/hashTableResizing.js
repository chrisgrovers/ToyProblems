/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */


var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  var maxStorage = function () {
    return storageLimit * (3/4);
  };

  var minStorage = function() {
    return storageLimit * (1/4);
  };

  result.insert = function(key, value, collection, maxSize) {
    // TODO: implement `insert`
    var collection = collection || storage;
    var maxSize = maxSize || storageLimit;
    var hashKey = getIndexBelowMaxForKey(key, maxSize);
    // TODO: Handle collisions.... yay!
      // check if storage at hashkey
      // if value at storage, push the value
    storage[hashKey] ? storage[hashKey].push({key, value}) : (storage[hashKey] = [{key:value}]);
    // increase size by one
    size++;
    // check if size is over 3/4 storage limit (check before or after inserting??)
    if (size > maxStorage()) {
      // increase storagelimit by double
      result.resize(2, result);
    }
  };

  result.retrieve = function(key, value) {
    // TODO: implement `retrieve`
    var hashKey = getIndexBelowMaxForKey(key, storageLimit);
    return storage[hashKey];
  };

  result.remove = function(key) {
    // TODO: implement `remove`
    var hashKey = getIndexBelowMaxForKey(key, storageLimit);
    // search for the key value in the storage array at hashKey
    for (var i = 0; i < storage[hashKey].length; i++) {
      if (storage[hashKey][i][key]) {
        // if 
        storage[hashKey].slice(i, 1);
      }
    }

    // decrease size by one
    size--;
    // check if size is below 1/4 of storageLimit
    if (size < minStorage()) {
      // resize by decreasing storage limit by half
      result.resize(0.5, result);      
    }
  };

  result.resize = function(doubleordivide, hashTable) {
    // reset the storageLimit by multiplying by the doubleordivide
    var resizedHash = new Array(storageLimit * doubleordivide);
    // push every item in storage into new resizedHash
    for (var i = 0; i < storage.length; i++) {
      // access 
      for (var key in storage[i]) {
        var newKey = getIndexBelowMaxForKey(key);
        result.insert(newKey, storage[i][key], resizedHash)
      }
    }

    // reset storage to new resized hash table
    storage = resizedHash;
  }

  // return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
