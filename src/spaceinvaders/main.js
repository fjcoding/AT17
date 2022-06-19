import readline from 'readline';
import { Scenario } from './scenario.js';
import { Player } from './player.js';
import { Alien } from './enemy.js';
import { Block } from './block.js';
import { Bullet } from './bullet.js';
import { Score } from './score.js';

let row = 30;
let col = 22;
let posColAliens = 0;
let posRowAliens = 0;
let posXPlayer = 1;
let posYPlayer = 1;
let aliens = [];
let bullets = [];

let scoreGame = new Score(col);
let flag = true;
let flagAlienCol = true;
let flagAlienRow = true;
const posInitial = 1;

let countForUpdateAlien = 0;
let countForUpdateFrecuenceBullet = 0;

let board = new Scenario(row, col);
board.initBoard(' . ');
initAliens(board.content);

function run() {
    readline.cursorTo(process.stdout, 0, 0);
    board.initBoard(' . ');
    board.putBorder();
    process.stdout.write(scoreGame.printScore());
    let boardFill = board.getBoard();
    aliensInBoard();
    let player = new Player(posXPlayer, posYPlayer,  boardFill, ' W ', flag);
    player.setPlayer(boardFill, ' W ');
    let block = new Block(boardFill);
    block.putDinamicBlocks(3, boardFill);
    bulletInBoard(posXPlayer, posYPlayer,  boardFill);
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

function bulletInBoard(posXPlayer, posYPlayer, content) {
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
    if (countForUpdateAlien == 1) {
        verifyMoveAliens();
        countForUpdateAlien = 0;
    } else {
        countForUpdateAlien ++;
        printAliensCol();
    }
}

function verifyMoveAliens() {
    if (posRowAliens > row - Math.floor(row / 3)) {
        restore();
        scoreGame.deleteLives();
        posRowAliens = 1;
    }
    if (posColAliens == 1) {
        posRowAliens ++;
        flagAlienRow = false;
        flagAlienCol = false;
    } else if (posColAliens == -2) {
        posRowAliens ++;
        flagAlienCol = true;
        flagAlienRow = false;
    } if (flagAlienCol) {
        posColAliens ++;
    } else {
        posColAliens --;
    }

    updateAliensCol();
    flagAlienRow = true;
}

function updateAliensCol(bullet) {
    for (let i = 0; i < aliens.length; i++) {
        if (bullet != undefined) {
            if (aliens[i].getPosX() == bullet.getPosX()  && aliens[i].getPosY() == bullet.getPosY()) {
                aliens.splice(i, 1);
                let oldPoints = scoreGame.getPoints();
                scoreGame.setPoints(oldPoints + 100);
                return true;
            }
        } else {
            aliens[i].moveAlien(flagAlienCol, flagAlienRow);
        }
    }
    return false;
}

function printAliensCol() {
    aliens.forEach(alien => alien.printAlien());
}

function restore() {
    aliens.forEach(alien => alien.restoreLocation());
}


function fireBullet() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].getPosX() > row - 1 || updateAliensCol(bullets[i])) {
            bullets.splice(i, 1);
        } else {
            bullets[i].moveBullet();
        }
    }
}


