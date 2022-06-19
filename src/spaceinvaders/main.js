import readline from 'readline';
import { Scenario } from './scenario.js';
import { Player } from './player.js';
import { Alien } from './enemy.js';
import { Block } from './block.js';
import { Bullet } from './bullet.js';
import { Score } from './score.js';

let row = 30;
let col = 22;
let posRowAliens = 1;
let posXPlayer = 1;
let posYPlayer = 1;
let aliens = [];
let bullets = [];
let bulletsAlien = [];
let player;
let lastRightPosition = 2;
let lastLeftPosition = col - 1;

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
    player = new Player(posXPlayer, posYPlayer,  boardFill, ' W ', flag);
    player.setPlayer(boardFill, ' W ');
    let block = new Block(boardFill);
    block.putDinamicBlocks(3, boardFill);
    bulletInBoardPlayer(posXPlayer, posYPlayer,  boardFill);
    bulletInBoardAlien();
    process.stdout.write(board.print());
    posYPlayer = player.changeDirection(flag, col, posInitial);
    flag = player.changeFlag();
}

console.clear();
setInterval(run, 400);


function initAliens(content) {
    for (let posX = content.length - 3; posX >= Math.floor(content.length * 0.8); posX--) {
        for (let posY = 4; posY < content[posX].length - 4; posY++) {
            const alien = new Alien(posX, posY, content);
            aliens.push(alien);
        }
    }
    return aliens;
}

function bulletInBoardAlien() {
    if (countForUpdateFrecuenceBullet == 4) {
        let firstCol = 0;
        let aliensColInit = aliens[0].getPosY();
        for (let i = 0; i < aliens.length; i++) {
            if (aliens[i].getPosY() == aliensColInit) {
                if (board.getBoard()[aliens[i].getPosX() - 1][aliens[i].getPosY()] == ' A ') {
                    firstCol = i;
                }
            }
        }
        bulletsAlien.push(new Bullet(aliens[firstCol].getPosX() - 2, aliens[firstCol].getPosY(), board.getBoard()));
        fireBulletAlien();
        countForUpdateFrecuenceBullet = 0;
    } else {
        countForUpdateFrecuenceBullet ++;
        fireBulletAlien();
    }
}

function bulletInBoardPlayer(posXPlayer, posYPlayer, content) {
    if (countForUpdateFrecuenceBullet == 2) {
        bullets.push(new Bullet(posXPlayer + 1, posYPlayer, content));
        fireBulletPlayer();
        countForUpdateFrecuenceBullet = 0;
    } else {
        countForUpdateFrecuenceBullet ++;
        fireBulletPlayer();
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
    if (aliens[aliens.length - 1].getPosX() == 2) {
        restore();
        scoreGame.deleteLives();
        posRowAliens = 1;
    }

    lastRightPosition = 2;
    lastLeftPosition = col - 1;
    if (flagAlien) {
        validateRight();
    } else {
        validateLeft();
    }
    updateAliensCol();
    flagAlienRow = true;
}

function updateAliensCol(bullet) {
    for (let i = 0; i < aliens.length; i++) {
        if (bullet != undefined) {
            if (aliens[i].getPosX() == bullet.getPosX() && aliens[i].getPosY() == bullet.getPosY()) {
                aliens.splice(i, 1);
                let oldPoints = scoreGame.getPoints();
                scoreGame.setPoints(oldPoints + 100);
                return true;
            }
        } else {
            if (lastRightPosition == col || lastLeftPosition == 1) {
                aliens[i].moveAlienDown(posRowAliens);
            } else {
                aliens[i].moveAlienOneStep(flagAlien);
            }
        }
    }
    return false;
}

function validateRight() {
    for (let i = 0; i < aliens.length; i++) {
        if (aliens[i].getPosY() > lastRightPosition) {
            lastRightPosition = aliens[i].getPosY();
        }
    }
    if (lastRightPosition == col) {
        flagAlien = false;
    }
}
function validateLeft() {
    for (let i = 0; i < aliens.length; i++) {
        if (aliens[i].getPosY() < lastLeftPosition) {
            lastLeftPosition = aliens[i].getPosY();
        }
    }
    if (lastLeftPosition == 1) {
        flagAlien = true;
    }
}
function printAliensCol() {
    aliens.forEach(alien => alien.printAlien());
}

function restore() {
    aliens.forEach(alien => alien.restoreLocation());
}

function fireBulletPlayer() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].getPosX() > row - 1 || updateAliensCol(bullets[i])) {
            bullets.splice(i, 1);
        } else {
            bullets[i].moveBulletPlayer();
        }
    }
}

function fireBulletAlien() {
    for (let i = 0; i < bulletsAlien.length; i++) {
        if (bulletsAlien[i].getPosX() == 2 || deletePlayer(bulletsAlien[i])) {
            bulletsAlien.splice(i, 1);
        } else {
            bulletsAlien[i].moveBulletAlien();
        }
    }
}
function deletePlayer(bullet) {
    if (player.getPosX() == bullet.getPosX() - 1 && player.getPosY() == bullet.getPosY()) {
        return true;
    } else {
        return false;
    }
}
