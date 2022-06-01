export class ant {
    constructor() {
        this.fila = 0;
        this.columna = 0;
        this.step = 0;
        this.comand = 2;
        /* Comportamiento de la hormiga:
        0:La hormiga disminuyo una posición en las filas
        1:La hormiga aumento una posición en las filas
        2:La hormiga disminuyo una posición en las columnas
        3:La hormiga aumento una posición en las columnas */
    }
}

export function mover(ant, n, step) {
    var matriz = matrix(n);
    ant.fila = ant.columna = Math.round((n - 1) / 2);
    for (var i = 0; i < step; i++) {
        switch (ant.comand) {
        case 0:
            switch (matriz[ant.fila][ant.columna]) {
            case 0:
                matriz[ant.fila][ant.columna] = 1;
                ant.columna += 1;
                ant.comand = 3;
                break;
            case 1:
                matriz[ant.fila][ant.columna] = 0;
                ant.columna -= 1;
                ant.comand = 2;
                break;
            }
            break;
        case 1:
            switch (matriz[ant.fila][ant.columna]) {
            case 0:
                matriz[ant.fila][ant.columna] = 1;
                ant.columna -= 1;
                ant.comand = 2;
                break;
            case 1:
                matriz[ant.fila][ant.columna] = 0;
                ant.columna += 1;
                ant.comand = 3;
                break;
            }
            break;
        case 2:
            switch (matriz[ant.fila][ant.columna]) {
            case 0:
                matriz[ant.fila][ant.columna] = 1;
                ant.fila -= 1;
                ant.comand = 0;
                break;
            case 1:
                matriz[ant.fila][ant.columna] = 0;
                ant.fila += 1;
                ant.comand = 1;
                break;
            }
            break;
        case 3:
            switch (matriz[ant.fila][ant.columna]) {
            case 0:
                matriz[ant.fila][ant.columna] = 1;
                ant.fila += 1;
                ant.comand = 1;
                break;
            case 1:
                matriz[ant.fila][ant.columna] = 0;
                ant.fila -= 1;
                ant.comand = 0;
                break;
            }
            break;
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

function matrix(n) {
    var arraybidimensional = new Array(n);
    for (var i = 0; i < n; i++) {
        arraybidimensional[i] = new Array(n).fill(0);
    }
    return arraybidimensional;
}