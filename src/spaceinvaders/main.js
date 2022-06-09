import readline from 'readline';
import { Scenario } from './scenario.js';

let row = 15;
let col = 15;
let content = [];
let score = ' SCORE:  00000';
let tab = '                   ';
let lives = ' Lives: X X X';
score += tab + lives + '\n';


function run() {
    readline.cursorTo(process.stdout, 0, 0);
    let board = new Scenario(row, col, content);
    process.stdout.write(`\r${score}`);
    //let boardFill = board.initBoard();
    board.initBoard();
    board.putBorder();
    process.stdout.write(board.print());
}

console.clear();
setInterval(run, 300);
