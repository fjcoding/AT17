

var grid;
var x;
var y;
var dir;


//estados de la hormiga
var ANTUP = 0;
var ANTRIGHT = 1;
var ANTDOWN = 2;
var ANTLEFT = 3;


//function from Chargue Visual Components
 function setup() {
  createCanvas(400, 400);
  grid = make2DArray(width, height);
  x = width / 2;
  y = height / 2;
  dir = ANTUP;
}

//function for Rotate to Right
function turnRight() {
  dir++;
  if (dir > ANTLEFT) {
    dir = ANTUP;
  }
}
//function for Rotate to Left
function turnLeft() {
  dir--;
  if (dir < ANTUP) {
    dir = ANTLEFT;
  }
}


//function for Move to Forward
function moveForward() {
  if (dir == ANTUP) {
    y--;
  } else if (dir == ANTRIGHT) {
    x++;
  } else if (dir == ANTDOWN) {
    y++;
  } else if (dir == ANTLEFT) {
    x--;
  }

  if (x > width - 1) {
    x = 0;
  } else if (x < 0) {
    x = width - 1;
  }
  if (y > height - 1) {
    y = 0;
  } else if (y < 0) {
    y = height - 1;
  }
}

//Function From Defect that it function principal is Draw in the Canvas
 function draw() {
  strokeWeight(1);
  for (let n = 0; n < 11000; n++) {
   
    let state = grid[x][y];
    if (state == 0) {
      turnRight();
      grid[x][y] = 1;
    } else if (state == 1) {
      turnLeft();
      grid[x][y] = 0;
    }

    stroke(color(255));
    if (grid[x][y] == 1) {
      stroke(color(0));
    }
    point(x, y);
    moveForward();
  }
  noloop();
}

//Create the two-dimencional Array
function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

