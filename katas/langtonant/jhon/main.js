 import {Board} from './board.js';
    let boardMain = new Board(process.argv[2],process.argv[3]);
    //boardMain.createBoard(process.argv[1],process.argv[2]);
    //boardMain.fillboard();
    boardMain.printBoard();
    //console.log(tablero.join('\n'));