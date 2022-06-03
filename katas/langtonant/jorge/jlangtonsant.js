let grid;
let x;
let y;
let antDir;

//Define where the ant turns
const ANTUP = 0;
const ANTRIGHT = 1;
const ANTDOWN = 2;
const ANTLEFT = 3;

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

export function printGrid() {
    for (let i = 0; i < grid.length; i++) {
        var fill = '';
        for (let j = 0; j < grid[i].length; j++) {
            fill += grid[i][j];
        }
        console.log(fill);
    }
}

function turnRight() {
    antDir++;
    if (antDir > ANTLEFT) {
        antDir = ANTUP;
    }
}

function turnLeft() {
    antDir--;
    if (antDir < ANTUP) {
        antDir = ANTLEFT;
    }
}

function moveForward() {
    if (antDir == ANTUP) {
        y--;
    } else if (antDir == ANTRIGHT) {
        x++;
    } else if (antDir == ANTDOWN) {
        y++;
    } else if (antDir == ANTLEFT) {
        x--;
    }

    let numRow;
    let numCol;

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

export function VerifyBlack(myArray, posX, posY) {
    if (myArray[posY][posX] == '#') {
        return true;
    } else {
        return false;
    }
}

export function turnAntRight(antDirec) {
    antDirec++;
    if (antDirec > ANTLEFT) {
        antDirec = ANTUP;
    }
    return antDirec;
}

export function turnAntLeft(antDirec) {
    antDirec--;
    if (antDirec < ANTUP) {
        antDirec = ANTLEFT;
    }
    return antDirec;
}