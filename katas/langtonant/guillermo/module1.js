const LEFT = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;

export class ant {
    constructor() {
        this.fila = 0;
        this.columna = 0;
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
        ant.columna--;
        break;
    case UP:
        ant.fila--;
        break;
    case RIGHT:
        ant.columna++;
        break;
    case DOWN:
        ant.fila++;
        break;
    }
}

export function langtonant(ant, n, step) {
    var matriz = createBiMatrix(n);
    ant.fila = ant.columna = Math.round((n - 1) / 2);
    for (var i = 0; i < step; i++) {
        if (matriz[ant.fila][ant.columna] == 0) {
            matriz[ant.fila][ant.columna] = 1;
            right(ant);
            move(ant);
        } else {
            matriz[ant.fila][ant.columna] = 0;
            left(ant);
            move(ant);
        }
    }
    var arrText = '';
    for (var j = 0; j < matriz.length; j++) {
        for (var k = 0; k < matriz[j].length; k++) {
            if (j == ant.fila && k == ant.columna) {
                //arrText += '\u2658' + '  ';
                arrText += (matriz[j][k] ? '\u2658' : '\u265E') + '  ';
            } else {
                arrText += (matriz[j][k] ? '\u25B1' : '\u25B0') + '  ';
            }
        }
        console.log(arrText);
        arrText = '';
    }
    console.log('La hormiga se encuentra en la posición: (%s,%s), luego de %i pasos en una matriz de %i x %i', ant.fila, ant.columna, step, n, n);
}

export function createBiMatrix(n) {
    var arraybidimensional = new Array(n);
    for (var i = 0; i < n; i++) {
        arraybidimensional[i] = new Array(n).fill(0);
    }
    return arraybidimensional;
}