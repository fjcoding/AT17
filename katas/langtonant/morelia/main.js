import { generateMatrix } from './matrix.js';
//import * as functions from '.functions.js';
import { changeColor } from './functions.js';
import { nextDirection } from './functions.js';
import { move } from './functions.js';
import { Direction } from './functions.js';

//Generating the initial matrix
var size = process.argv[2];
//var size = 5;
var matrix = generateMatrix(size, size);

// Locate the ant
var ant = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
console.log('First position of the ant: ' + ant[0], ant[1]);
//Determine the steps
var steps = process.argv[3];
//var steps = 10;
//move ant
var direction = Direction.UP;
for (var i = 0;i < steps;i++) {
    var s = i + 1;
    console.log('Step: ' + s);
    changeColor(matrix, ant[0], ant[1]);
    console.log(matrix);
    if (i != steps - 1) {
        direction = nextDirection(direction, 0, 3);
        console.log('next direction: ' + direction);
        ant = move(ant[0], ant[1], direction, size);
        //console.log(ant[0], ant[1]);
    }
}