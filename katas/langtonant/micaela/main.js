import { generateMatrix } from './matrix.js';

//import * as functions from '.functions.js';
import { colorbox } from './functions.js';
import { movements } from './functions.js';
import { walk } from './functions.js';
import { dir } from './functions.js';

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

var dir = Direction.u;
for (var i = 0;i < steps;i++) 
{
    var s = i + 1;
    console.log('Step: ' + s);
    colorbox(matrix, ant[0], ant[1]);
    console.log(matrix);
    if (i != steps - 1) 
    {
        dir = movements(dir, 0, 3);
        console.log('next direction: ' + dir);
        ant = walk(ant[0], ant[1], dir, size);
        //console.log(ant[0], ant[1]);
    }
} 