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
export function init(rows, cols) {
    grid = make2DArray(rows, cols);
    x = rows / 2;
    y = cols / 2;
    dir = ANTUP;
}


function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = '';
        }
    }
    return arr;
}

export function printMatrix() {
    for (let i = 0; i < grid.length; i++) {
        var auxiliar = '';
        for (let j = 0; j < grid[i].length; j++) {
            auxiliar += grid[i][j] + ' ';
        }
        console.log(auxiliar);
    }
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
function moveForward(rows, cols) {
    if (dir == ANTUP) {
        y--;
    } else if (dir == ANTRIGHT) {
        x++;
    } else if (dir == ANTDOWN) {
        y++;
    } else if (dir == ANTLEFT) {
        x--;
    }

    if (x > rows - 1) {
        x = 0;
    } else if (x < 0) {
        x = rows - 1;
    }
    if (y > cols - 1) {
        y = 0;
    } else if (y < 0) {
        y = cols - 1;
    }
}

//Function move Ant
export function move(rows, cols, steps) {
    for (let n = 0; n < steps; n++) {
        let state = grid[x][y];
        if (state == 0) {
            turnRight();
            grid[x][y] = 1;
        } else if (state == 1) {
            turnLeft();
            grid[x][y] = '';
        }
        moveForward(rows, cols);
    }
}
