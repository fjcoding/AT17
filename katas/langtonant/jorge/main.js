import { setup } from './jlangtonsant.js';
import { antWalk } from './jlangtonsant.js';
import { printGrid } from './jlangtonsant.js';

var numCol = parseInt(process.argv[2]);
var numRow = parseInt(process.argv[3]);
var numSteps = parseInt(process.argv[4]);

setup(numCol, numRow);
antWalk(numCol, numRow, numSteps);
printGrid();
