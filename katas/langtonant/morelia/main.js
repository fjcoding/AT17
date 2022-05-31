import { generateMatrix } from './matrix.js';
import * as functions from '.functions.js';

//Generando la matriz inicial
var tamanio = process.argv[2];
var matriz = generateMatrix(tamanio,tamanio);

// Ubicar la hormiga
var hormiga=[Math.floor(Math.random() * tamaño),Math.floor(Math.random() * tamaño)];

//Determinar los steps
var pasos = process.argv[3];

//mover hormiga
var direccion=functions.Direccion.UP;
for(var i=0;i<pasos;i++) {
    functions.changeColor(matriz, hormiga[0], hormiga[1]);
    direccion=functions.next_direction(matriz, hormiga[0], hormiga[1], direccion);
    
    //console.log(matriz);
}
//Matriz final
console.log(matriz);