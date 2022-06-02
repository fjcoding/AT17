import { generateMatrix } from './matrix.js';
//import * as functions from '.functions.js';
import { changeColor } from './functions.js';
import { nextDirection } from './functions.js';
import { move } from './functions.js';
import { Direction } from './functions.js';

//Generating the initial matrix
const size = process.argv[2];
let matrix = generateMatrix(size, size);

// Locate the ant
let ant = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
console.log('First position of the ant: ' + ant[0], ant[1]);
//Determine the steps
const steps = process.argv[3];

//move ant
var direction = Direction.UP;
for (let i = 0; i < steps; i++) {
    let s = i + 1;
    console.log('Step: ' + s);
    changeColor(matrix, ant[0], ant[1]);
    console.log(matrix);
    if (i != steps - 1) {
        direction = nextDirection(matrix, ant[0], ant[1], direction);
        console.log('next direction: ' + direction);
        ant = move(ant[0], ant[1], direction, size);
        console.log(ant[0], ant[1]);
    }
}