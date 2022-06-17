import readline from 'readline';
import { Scenario } from './scenario.js';
import { Player } from './player.js';
import { Alien } from './enemy.js';
import { Block } from './block.js';
import { Boss } from './boss.js';

let row = 20;
let col = 20;
let posColAliens = 0;
let stepsAlien = 0;
let posRowAliens = 1;
let posXPlayer = 1;
let posYPlayer = (col/2);
let posXBoss = row;
let posYBoss = (col/2);
let aliens = [];
let score = ' SCORE:  00000';
let tab = '                   ';
let lives = ' Lives: X X X';
score += tab + lives + '\n';
let flag = true;
let flagBoss = true;
let flagAlien = true;
const posInitial = 1;
let element = ' X ';

function run() {
    readline.cursorTo(process.stdout, 0, 0);
    let board = new Scenario(row, col);
    board.initBoard('   ');
    board.putBorder();
    process.stdout.write(`\r${score}`);
    let boardFill = board.getBoard();
    initAliens(boardFill);
    verifyMoveAliens();
    let boss = new Boss(posXBoss, posYBoss,  boardFill, element, flag);
    element = boss.changeElement();
    let player = new Player(posXPlayer, posYPlayer,  boardFill, ' W ', flag);
    //player.setPlayer(boardFill, ' W ');
    //boss.setPlayer(boardFill, ' X ')
    let block = new Block(boardFill);
    // block.setBlock(2, 3, 3);
    block.putDinamicBlocks(3, boardFill);
    process.stdout.write(board.print());
    posYPlayer = player.changeDirection(flag, col, posInitial);
    flag = player.changeFlag();
    posYBoss = boss.changeDirectionBoss(flagBoss, col, posInitial)
    flagBoss = boss.changeFlag();
}

console.clear();
setInterval(run, 300);

function initAliens(content) {
    for (let posX = content.length - 2; posX >= Math.floor(content.length * 0.8); posX--) {
        for (let posY = 4; posY < content[posX].length - 4; posY++) {
            const alien = new Alien(posX, posY, content);
            aliens.push(alien);
        }
    }

    return aliens;
}

function verifyMoveAliens() {
    if (posRowAliens > row - Math.floor(row / 3)) {
        posRowAliens = 1;
    }
    if (posColAliens == 1) {
        posRowAliens ++;
        flagAlien = false;
        stepsAlien = -1;
    } else if (posColAliens == -1) {
        posRowAliens ++;
        flagAlien = true;
        stepsAlien = -1;
    } if (flagAlien) {
        posColAliens ++;
        stepsAlien ++;
    } else {
        posColAliens --;
        stepsAlien ++;
    }

    updateAliensCol();
}

function updateAliensCol() {
    aliens.forEach((alien) => {
        alien.moveAlien(posRowAliens, stepsAlien, flagAlien);
    });
}


