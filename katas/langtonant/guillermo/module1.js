const LEFT = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;

export class Ant {
    constructor() {
        this.row = 0;
        this.column = 0;
        this.direction = LEFT;
    }
}

export function right(ant) {
    ant.direction++;
    if (ant.direction > DOWN) {
        ant.direction = LEFT;
    }
}

export function left(ant) {
    ant.direction--;
    if (ant.direction < LEFT) {
        ant.direction = DOWN;
    }
}

export function move(ant) {
    switch (ant.direction) {
    case LEFT:
        ant.column--;
        break;
    case UP:
        ant.row--;
        break;
    case RIGHT:
        ant.column++;
        break;
    case DOWN:
        ant.row++;
        break;
    }
}

export function langtonant(ant, n, step) {
    var matriz = createBiMatrix(n);
    ant.row = ant.column = Math.round((n - 1) / 2);
    for (var i = 0; i < step; i++) {
        if (matriz[ant.row][ant.column] == 0) {
            matriz[ant.row][ant.column] = 1;
            right(ant);
            move(ant);
        } else {
            matriz[ant.row][ant.column] = 0;
            left(ant);
            move(ant);
        }
    }
    var arrText = '';
    for (var j = 0; j < matriz.length; j++) {
        for (var k = 0; k < matriz[j].length; k++) {
            if (j == ant.row && k == ant.column) {
                //arrText += '\u2658' + '  ';
                arrText += (matriz[j][k] ? '\u2658' : '\u265E') + '  ';
            } else {
                arrText += (matriz[j][k] ? '\u25B1' : '\u25B0') + '  ';
            }
        }
        console.log(arrText);
        arrText = '';
    }
    console.log('The ant now is in the position: (%s,%s), after %i steps in a %i x %i matrix', ant.row, ant.column, step, n, n);
}

export function createBiMatrix(n) {
    var arraybidimensional = new Array(n);
    for (var i = 0; i < n; i++) {
        arraybidimensional[i] = new Array(n).fill(0);
    }
    return arraybidimensional;
}