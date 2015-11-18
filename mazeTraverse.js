//make a function that traverses a maze with walls(@), a start (s) and an end (e)
// empty spaces are points where you can move

var myMaze = [
  "@@@@@@@@",
  "@  @++++",
  "@ @@+@@@",
  "@   +++@",
  "@@@@@@+@",
  "   ++++@",
  "@@@+@@ @",
];



// recurse function(x, y)
  // check if (x,y) === '@' || out of bounds || '+'
    // return false;
  // base case: (x,y) === 'E')  // end
    // isSolved = true;
    // change to +, return true;
    
  // current spot change from ' ' to '+'
  
  // if (recurseFunction(x-1, y) || // W
  // recurseFunction(x, y+1) || // S
  // recurseFunction(x+1, y) || // E
  // recurseFunction(x, y-1)) // N
    // return true;

  // change '+' back to ' '
  // return false

// recurse (startx, starty)  
// return resultMaze copy


var returnChar = function(x,y) {
  return maze[y][x];
}


// possibilities: '@', 'end', dead-end/out of bounds/empty string, no possible next steps

//no possible next steps detection:
  // if all possible next steps are not ' ', and not in 'traverse' array
  // if all possibilities are '@' && step before is not an option

// start and end are given
// map myMaze into matrix maze
// track the current point with 'current'
// track the route with 'traverse'

// traverse empty spots in maze
// starting at start, traverse x, and y for an empty character next to start
// each empty character we find, we will add to traverse array

