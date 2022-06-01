let grid;
let x;
let y;
let antDir;

//Define where the ant turns
let ANTUP = 0;
let ANTRIGHT = 1;
let ANTDOWN = 2;
let ANTLEFT = 3;

export function setup(numRow, numCol) {
  grid = make2DArray(numRow, numCol);
  x = numRow / 2;
  y = numCol / 2;
  antDir = ANTUP;
}

function make2DArray(numCol, numRow) {
  let arr = new Array(numCol);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(numRow);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

export function printGrid(){
  for (let i = 0; i < grid.length; i++) {
    var fill = '0';
    for (let j = 0; j < grid[i].length; j++) {
        fill += grid[i][j] + '0';
    }
    console.log(fill);
}
}

 function turnRight() {
        dir++;
        if (dir > ANTLEFT) {
          dir = ANTUP;
        }
      }
      
      function turnLeft() {
        dir--;
        if (dir < ANTUP) {
          dir = ANTLEFT;
        }
      }
      
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
      
        if (x > numRow - 1) {
          x = 0;
        } else if (x < 0) {
          x = numRow - 1;
        }
        if (y > numCol - 1) {
          y = 0;
        } else if (y < 0) {
          y = numCol - 1;
        }
      }
      
      export function antWalk (numRow, numCol, numSteps) {
        for (let w = 0; w < numSteps; w++) {
            let state = grid[x][y];
            if (state == 0) {
                turnRight();
                grid[x][y] = 1;
            } else if (state == 1) {
                turnLeft();
                grid[x][y] = '0';
            }
            moveForward(numRow, numCol);
        }
      }
