// import functions

import { FuncMatrix } from './functions';
import { ColorBox } from './functions';
import { Movements } from './functions.js';
import { Walk } from './functions';

//import variable dir
import { dir } from './functions';

//Create the matrix
var size = 8;
var matrix = FuncMatrix(size, size);

// Put the ant in the matrix
var ant = [1, 1];

//Determine the steps
var steps = 10;
var dir = dir.north;
for (var i = 0;
    i < steps;
    i++) {
    var s = i + 1;
    console.log('Step: ' + s);
    ColorBox(matrix, ant[0], ant[1]);
    console.log(matrix);
    if (i != steps - 1) 
    {
        dir = Movements(dir, 0, 3);
        console.log('Movements: ' + dir);
        ant = Walk(ant[0], ant[1], dir, size);
    }
}