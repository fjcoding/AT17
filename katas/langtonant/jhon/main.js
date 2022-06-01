import {Board} from './board.js';
let boardMain = new Board(process.argv[2], process.argv[3]);
boardMain.printBoard();
boardMain.langtonantFunction(process.argv[4]);