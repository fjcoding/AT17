import readline from 'readline';
import { Scenario } from './scenario.js';
import { Player } from './player.js';
import { Alien } from './enemy.js';

let row = 15;
let col = 15;
let posColAliens = -1;
let posRowAliens = 0;
let posXPlayer = 1;
let posYPlayer = 1;
let aliens = [];
let score = ' SCORE:  00000';
let tab = '                   ';
let lives = ' Lives: X X X';
score += tab + lives + '\n';


function run() {
    readline.cursorTo(process.stdout, 0, 0);
    let board = new Scenario(row, col);
    board.initBoard();
    board.putBorder();
    process.stdout.write(`\r${score}`);
    let boardFill = board.getBoard();
    initAliens(boardFill);
    new Player(posXPlayer, posYPlayer, boardFill, ' W ');
    if (posColAliens == 2) {
        posRowAliens ++;
        posColAliens = -1;
        updateAliensCol(posRowAliens, posColAliens);
    } else if (posRowAliens < row - Math.floor(row / 5)) {
        updateAliensCol(posRowAliens, posColAliens);
        posColAliens ++;
    } else {
        posRowAliens = 0;
    }

    process.stdout.write(board.print());
    posXPlayer = posXPlayer == col ? 1 : posXPlayer + 1;
}

console.clear();
setInterval(run, 300);

function initAliens(content) {
    for (let posX = content.length - 2; posX >= Math.floor(content.length * 0.8); posX--) {
        for (let posY = 2; posY < content[posX].length - 2; posY++) {
            const alien = new Alien(posX, posY, content);
            aliens.push(alien);
        }
    }

    return aliens;
}

function updateAliensCol(banderaRow, banderaCol) {
    aliens.forEach((alien) => {
        alien.updateAlien(banderaRow, banderaCol);
    });
}
