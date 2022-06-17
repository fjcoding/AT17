import readline from 'readline';
import { Scenario } from './scenario.js';
import { Player } from './player.js';
import { Alien } from './enemy.js';
import { Block } from './block.js';
import { Bullet } from './bullet.js';

let row = 30;
let col = 22;
let posColAliens = 0;
let stepsAlien = 0;
let posRowAliens = 1;
let posXPlayer = 1;
let posYPlayer = 1;
let aliens = [];
let bullets = [];
let score = ' SCORE:  00000';
let tab = '                                          ';
let lives = ' Lives: X X X';
score += tab + lives + '\n';
let flag = true;
let flagAlien = true;
const posInitial = 1;

let countForUpdateAlien = 0;
let countForUpdateFrecuenceBullet = 0;

let board = new Scenario(row, col);


function run() {
    readline.cursorTo(process.stdout, 0, 0);
    board.initBoard('   ');
    board.putBorder();
    process.stdout.write(`\r${score}`);
    let boardFill = board.getBoard();
    initAliens(boardFill);
    aliensInBoard(boardFill);
    let player = new Player(posXPlayer, posYPlayer,  boardFill, ' W ', flag);
    player.setPlayer(boardFill, ' W ');
    bulletinBoard(posXPlayer, posYPlayer,  boardFill);
    let block = new Block(boardFill);
    block.putDinamicBlocks(3, boardFill);
    process.stdout.write(board.print());
    posYPlayer = player.changeDirection(flag, col, posInitial);
    flag = player.changeFlag();
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

function bulletinBoard(posXPlayer, posYPlayer, content) {
    if (countForUpdateFrecuenceBullet == 3) {
        bullets.push(new Bullet(posXPlayer, posYPlayer, content));
        fireBullet();
        countForUpdateFrecuenceBullet = 0;
    } else {
        countForUpdateFrecuenceBullet ++;
        fireBullet();
    }
}

function aliensInBoard() {
    if (countForUpdateAlien == 10) {
        verifyMoveAliens();
        countForUpdateAlien = 0;
    } else {
        countForUpdateAlien ++;
        updateAliensCol();
    }
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


function fireBullet() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].getPosX() == row - 1) {
            bullets.splice(i, 1);
        } else {
            bullets[i].moveBullet();
        }
    }
}


