// import functions

import { FuncMatrix } from './functions';
import { ColorBox } from './functions';
import { Movements } from './functions.js';
import { Walk } from './functions';

//import variable dir
import { dir } from './functions';

//Create the matrix
const size = 8;
let matrix = FuncMatrix(size, size);

// Put the ant in the matrix
let ant = [1, 1];

//Determine the steps
const steps = 10;
let Dir = dir.north;
for (let i = 0;
    i < steps;
    i++) {
    let s = i + 1;
    console.log('Step: ' + s);
    ColorBox(matrix, ant[0], ant[1]);
    console.log(matrix);
    if (i != steps - 1) {
        Dir = Movements(Dir, 0, 3);
        console.log('Movement: ' + Dir);
        ant = Walk(ant[0], ant[1], Dir, size);
    }
}