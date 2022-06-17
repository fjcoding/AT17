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
let sc = 0;
//let score = ' SCORE: 0';
//let tab = '                   ';
//let lives = ' Lives: X X X';
//score += tab + lives + '\n';
let flag = true;
let flagAlien = true;
const posInitial = 1;

let countForUpdateAlien = 0;
let countForUpdateFrecuenceBullet = 0;

let board = new Scenario(row, col);
board.initBoard('   ');
initAliens(board.content);

function run() {
    readline.cursorTo(process.stdout, 0, 0);
    board.initBoard('   ');
    board.putBorder();
    process.stdout.write(`\r${sc}` + '\n');
    let boardFill = board.getBoard();
    aliensInBoard(boardFill);
    let player = new Player(posXPlayer, posYPlayer,  boardFill, ' W ', flag);
    player.setPlayer(boardFill, ' W ');
    let block = new Block(boardFill);
    block.putDinamicBlocks(3, boardFill);
    bulletinBoard(posXPlayer, posYPlayer,  boardFill);

    process.stdout.write(board.print());
    posYPlayer = player.changeDirection(flag, col, posInitial);
    flag = player.changeFlag();
}

console.clear();
setInterval(run, 200);


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
    if (countForUpdateFrecuenceBullet == 4) {
        bullets.push(new Bullet(posXPlayer, posYPlayer, content));
        fireBullet();
        countForUpdateFrecuenceBullet = 0;
    } else {
        countForUpdateFrecuenceBullet ++;
        fireBullet();
    }
}

function aliensInBoard() {
    if (countForUpdateAlien == 50) {
        verifyMoveAliens();
        countForUpdateAlien = 0;
    } else {
        countForUpdateAlien ++;
        printAliensCol();
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

function updateAliensCol(bullet) {
    for (let i = 0; i < aliens.length; i++) {
        if (bullet != undefined) {
            if (aliens[i].getPosX() == bullet.getPosX() + 1 && aliens[i].getPosY() == bullet.getPosY()) {
                aliens.splice(i, 1);
                sc ++;
                return true;
            }
        } else {
            aliens[i].moveAlien(posRowAliens, stepsAlien, flagAlien);
        }
    }
    return false;
}

function printAliensCol() {
    aliens.forEach(alien => alien.printAlien());
}


function fireBullet() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].getPosX() == row - 1 || updateAliensCol(bullets[i]) ||
        board.getBoard()[bullets[i].getPosX()][bullets[i].getPosY()]  == ' ━ ' ||
         board.getBoard()[bullets[i].getPosX()][bullets[i].getPosY()]  == ' ◢ ' ||
          board.getBoard()[bullets[i].getPosX()][bullets[i].getPosY()]  == ' ◣ ') {
            bullets.splice(i, 1);
        } else {
            bullets[i].moveBullet();
        }
    }
}

