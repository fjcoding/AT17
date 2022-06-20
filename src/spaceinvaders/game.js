import readline from 'readline';
import { Scenario } from './scenario.js';
import { Player } from './player.js';
import { Alien } from './enemy.js';
import { Block } from './block.js';
import { Boss } from './boss.js';
import { Bullet } from './bullet.js';
import { Score } from './score.js';


export class Game {
    constructor() {
        this.posInitial = 1;
        this.row = 30;
        this.col = 22;
        this.posRowAliens = 1;
        this.posXPlayer = 1;
        this.posYPlayer = (this.col / 2);
        this.posXBoss = this.row;
        this.posYBoss = (this.col / 2);
        this.aliens = [];
        this.bullets = [];
        this.bulletsAlien = [];
        this.player;
        this.boss;
        this.lastRightPosition = 2;
        this.lastLeftPosition = this.col - 1;
        this.scoreGame = new Score(this.col);
        this.flag = true;
        this.flagBoss = true;
        this.flagAlien = true;
        this.element = ' $ ';
        this.countForUpdateAlien = 0;
        this.countForUpdateFrecuenceBullet = 0;
        this.board = new Scenario(this.row, this.col);
        this.board.initBoard('   ');
        this.initAliens(this.board.content);
        this.boardFill;
        this.oldPoints;
    }

    startGame() {
        readline.cursorTo(process.stdout, 0, 0);
        this.board.initBoard('   ');
        this.board.putBorder();
        process.stdout.write(this.scoreGame.printScore());
        this.boardFill = this.board.getBoard();
        this.boss = new Boss(this.posXBoss, this.posYBoss,  this.boardFill, this.element, this.flagBoss);
        this.element = this.boss.changeElement(this.flagBoss, this.col);
        this.aliensInBoard();
        this.player = new Player(this.posXPlayer, this.posYPlayer,  this.boardFill, ' W ', this.flag);
        this.block = new Block(this.boardFill);
        this.block.putDinamicBlocks(3, this.boardFill);
        this.bulletInBoardPlayer(this.posXPlayer, this.posYPlayer,  this.boardFill);
        this.bulletInBoardAlien();
        process.stdout.write(this.board.print());
        this.posYPlayer = this.player.changeDirection(this.flag, this.col, this.posInitial, Math.random());
        this.flag = this.player.changeFlag();
        this.posYBoss = this.boss.changeDirectionBoss(this.flagBoss, this.col, this.posInitial);
        this.element = this.boss.changeElement(this.flagBoss, this.col);
        this.flagBoss = this.boss.changeFlag();
        if (this.aliens.length == 0) {
            clearInterval();
            process.stdout.write(this.wonGame());
            process.exit();
        }
        if (this.scoreGame.getLives() == 0) {
            clearInterval();
            process.stdout.write(this.gameOver());
            process.exit();
        }
    }

    initAliens(content) {
        for (let posX = content.length - 3; posX >= Math.floor(content.length * 0.8); posX--) {
            for (let posY = 4; posY < content[posX].length - 4; posY++) {
                const alien = new Alien(posX, posY, content);
                this.aliens.push(alien);
            }
        }
        return this.aliens;
    }

    bulletInBoardAlien() {
        if (this.countForUpdateFrecuenceBullet == 4) {
            let firstCol = 0;
            let lastCol = 0;
            let aliensColInit = this.aliens[0].getPosY();
            let aliensRowInit = this.aliens[0].getPosX();
            for (let i = 0; i < this.aliens.length; i++) {
                if (this.aliens[i].getPosY() == aliensColInit) {
                    if (this.board.getBoard()[this.aliens[i].getPosX() - 1][this.aliens[i].getPosY()] == ' A ') {
                        firstCol = i;
                    }
                }
                if (this.aliens[i].getPosY() > aliensColInit && this.aliens[i].getPosX() == aliensRowInit) {
                    if (this.board.getBoard()[this.aliens[i].getPosX() - 1][this.aliens[i].getPosY()] == ' A ') {
                        lastCol = i;
                    }
                }
            }
            if (firstCol != lastCol) {
                this.bulletsAlien.push(new Bullet(this.aliens[lastCol].getPosX() - 5, this.aliens[lastCol].getPosY(), this.board.getBoard()));
            }
            this.bulletsAlien.push(new Bullet(this.aliens[firstCol].getPosX() - 2, this.aliens[firstCol].getPosY(), this.board.getBoard()));
            this.fireBulletAlien();
            this.countForUpdateFrecuenceBullet = 0;
        } else {
            this.countForUpdateFrecuenceBullet ++;
            this.fireBulletAlien();
        }
    }

    bulletInBoardPlayer(posXPlayer, posYPlayer, content) {
        if (this.countForUpdateFrecuenceBullet == 2) {
            this.bullets.push(new Bullet(posXPlayer + 1, posYPlayer, content));
            this.fireBulletPlayer();
            this.countForUpdateFrecuenceBullet = 0;
        } else {
            this.countForUpdateFrecuenceBullet ++;
            this.fireBulletPlayer();
        }
    }

    aliensInBoard() {
        if (this.countForUpdateAlien == 1) {
            this.verifyMoveAliens();
            this.countForUpdateAlien = 0;
        } else {
            this.countForUpdateAlien ++;
            this.printAliensCol();
        }
    }

    verifyMoveAliens() {
        if (this.aliens[this.aliens.length - 1].getPosX() == 2) {
            this.restore();
            this.scoreGame.deleteLives();
            this.posRowAliens = 1;
            this.restorePlayer();
        }
        this.lastRightPosition = 2;
        this.lastLeftPosition = this.col - 1;
        if (this.flagAlien) {
            this.validateRight();
        } else {
            this.validateLeft();
        }
        this.updateAliensCol();
    }

    updateAliensCol(bullet) {
        for (let i = 0; i < this.aliens.length; i++) {
            if (bullet != undefined) {
                if (this.aliens[i].getPosX() == bullet.getPosX() && this.aliens[i].getPosY() == bullet.getPosY()) {
                    this.aliens.splice(i, 1);
                    this.oldPoints = this.scoreGame.getPoints();
                    this.scoreGame.setPoints(this.oldPoints + 100);
                    return true;
                }
            } else {
                if (this.lastRightPosition == this.col || this.lastLeftPosition == 1) {
                    this.aliens[i].moveAlienDown(this.posRowAliens);
                } else {
                    this.aliens[i].moveAlienOneStep(this.flagAlien);
                }
            }
        }
        return false;
    }

    validateRight() {
        for (let i = 0; i < this.aliens.length; i++) {
            if (this.aliens[i].getPosY() > this.lastRightPosition) {
                this.lastRightPosition = this.aliens[i].getPosY();
            }
        }
        if (this.lastRightPosition == this.col) {
            this.flagAlien = false;
        }
    }

    validateLeft() {
        for (let i = 0; i < this.aliens.length; i++) {
            if (this.aliens[i].getPosY() < this.lastLeftPosition) {
                this.lastLeftPosition = this.aliens[i].getPosY();
            }
        }
        if (this.lastLeftPosition == 1) {
            this.flagAlien = true;
        }
    }

    printAliensCol() {
        this.aliens.forEach(alien => alien.printAlien());
    }


    fireBulletPlayer() {
        for (let i = 0; i < this.bullets.length; i++) {
            if (this.board.getBoard()[this.bullets[i].getPosX()][this.bullets[i].getPosY()] == ' $ ') {
                this.oldPoints = this.scoreGame.getPoints();
                this.scoreGame.setPoints(this.oldPoints + 500);
                this.boss.noBonus();
                this.boss.changeElement();
            }
            if (this.bullets[i].getPosX() == (this.row + 1) || this.updateAliensCol(this.bullets[i])) {
                this.bullets.splice(i, 1);
            } else {
                this.bullets[i].moveBulletPlayer();
            }
        }
    }

    fireBulletAlien() {
        for (let i = 0; i < this.bulletsAlien.length; i++) {
            let exitPlayer = this.deletePlayer(this.bulletsAlien[i]);
            if ((this.bulletsAlien[i].getPosX() == 2 && !exitPlayer) || this.bulletsAlien[i].getPosX() > 2) {
                this.bulletsAlien[i].moveBulletAlien();
            } else if ((this.bulletsAlien[i].getPosX() == 2 && exitPlayer)) {
                this.bulletsAlien.splice(i, 1);
                this.player.element = '   ';
                this.scoreGame.deleteLives();
                this.restorePlayer();
            } else if (this.bulletsAlien[i] == 1) {
                this.bulletsAlien.splice(i, 1);
            }
        }
    }

    restorePlayer() {
        this.posXPlayer = 1;
        this.posYPlayer = 1;
        this.flag = true;
        this.player = new Player(this.posXPlayer, this.posYPlayer,  this.boardFill, ' W ', this.flag);
    }

    restore() {
        this.aliens.forEach((alien) => {
            alien.restoreLocation();
        });
    }

    deletePlayer(bullet) {
        if (this.player.getPosX() == bullet.getPosX() - 1 && this.player.getPosY() == bullet.getPosY()) {
            return true;
        } else {
            return false;
        }
    }

    wonGame() {
        return '          ****************  ****************\n\n' + '          ****************  ****************\n\n' + '          ****************  ****************\n\n'
        + '          ************* WONNNNN  **************\n\n' + '          ****************  ****************\n\n' + '          ****************  ****************\n\n';
    }

    gameOver() {
        return '          ****************  ****************\n\n' + '          ****************  ****************\n\n' + '          ****************  ****************\n\n'
        + '          ********** GAME OVER **************\n\n' + '          ****************  ****************\n\n' + '          ****************  ****************\n\n' + '          ****************  ****************\n\n';
    }
}


