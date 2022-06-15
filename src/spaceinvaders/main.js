import readline from 'readline';
import { Scenario } from './scenario.js';
//import { Player } from './player.js';
//import { Alien } from './enemy.js';

let row = 15;
let col = 15;/*
let posColAliens = 0;
let stepsAlien = 0;
let posRowAliens = 1;
//let posXPlayer = 1;
//let posYPlayer = 1;
let aliens = [];*/
let score = ' SCORE:  00000';
let tab = '                   ';
let lives = ' Lives: X X X';
score += tab + lives + '\n';
//let flag = true;
//let flagAlien = true;
//const posInitial = 1;

let board = new Scenario(row, col);

// board.initBoard(); esto en scenary
// board.putBorder();

function run() {
    readline.cursorTo(process.stdout, 0, 0);
    board.nextScene();

    process.stdout.write(`\r${score}`);
    //  let boardFill = board.getBoard(); igual
    // initAliens(boardFill);  dentro d einicializar el board/escenario
    //  verifyMoveAliens();   igual
    //dentro de scenery debe crearse
    //   let player = new Player(posXPlayer, posYPlayer,  boardFill, ' W ', flag);
    //   player.setPlayer(boardFill, ' W ');   //en next scene
    process.stdout.write(board.print());
    //   posYPlayer = player.changeDirection(flag, col, posInitial);
}

console.clear();
setInterval(run, 300);
/*
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
        alien.moveAlienRigthDown(posRowAliens, stepsAlien, flagAlien);
    });
}

*/
