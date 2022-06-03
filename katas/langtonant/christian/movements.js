import { make2DArray } from './matrix.js';


export var grid;
export var x;
export var y;
export var dir;

//estados de la hormiga
var ANTUP = 0;
var ANTRIGHT = 1;
var ANTDOWN = 2;
var ANTLEFT = 3;


//function from Chargue Visual Components
export function init(size) {
    grid = make2DArray(size);
    x = Math.floor(size / 2);
    y = Math.floor(size / 2);
    dir = ANTUP;
}


//function for Rotate to Right
export function turnRight() {
    dir++;
    if (dir > ANTLEFT) {
        dir = ANTUP;
    }
}
//function for Rotate to Left
export function turnLeft() {
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
export function move(size, steps) {
    for (let n = 0; n < steps; n++) {
        let state = grid[x][y];
        if (isWhite(state)) {
            turnRight();
            grid[x][y] = '1';
        } else if (isBlack(state)) {
            turnLeft();
            grid[x][y] = '';
        }
        moveForward(size, size);
    }
}

export function isWhite(state) {
    return (state == 0);
}

export function isBlack(state) {
    return (state == 1);
}


