/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 * 
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
  return { value: value, next: null };
}

var hasCycle = function(linkedList) {
  // TODO: implement me!
  // if it loops, I will eventually get a value that I have already seen.. Look for that repeat
  // look for repeated values or repeated order??
    // repeated value will work for mvp
  var values = [];
  var repeated = false;

  var checkValues = function(check) {
    // two base cases??
    if (values.indexOf(check.value) > -1) {
      console.log('repeated value reached');
      repeated = true;
      return;
    } else if (check.next === null) {
      console.log('null reached');
      return repeated;
    };
    values.push(check.value);
    checkValues(check.next);
  }

  checkValues(linkedList);
  return repeated;
}; 



  // have a global var that increments each time a node is made, and compare that to how many times I check a next node?
  // check for linked list length? Nope, can't do that...
  // Look for never ending loops?
    // problem: Neverending loop... Never ends. Will never return 'false'
