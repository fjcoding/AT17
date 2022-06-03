import { grid, init, move } from './movements.js';
import { printMatrix } from './matrix.js';

var size = parseInt(process.argv[2]);
var steps = parseInt(process.argv[3]);

init(size);
move(size, steps);
printMatrix(grid);


