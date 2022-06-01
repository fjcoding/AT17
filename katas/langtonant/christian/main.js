import { init } from './module1.js';
import { move } from './module1.js';
import { printMatrix } from './module1.js';

var columns = parseInt(process.argv[2]);
var rows = parseInt(process.argv[3]);
var steps = parseInt(process.argv[4]);
init(columns, rows);
move(columns, rows, steps);
printMatrix();


