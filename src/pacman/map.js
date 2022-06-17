import { Pacman } from './pacman.js';
import { Ghost } from './ghost.js';
import { Apple } from './apple.js';
import { superDot } from './superdot.js';
const CLEAR = '\x1Bc';
const PACMAN = '\u15E7';
// const GHOST = '\u2126';
const GHOST = '\u15E3';
const BLOCK = '\u2592';
const DOT = '•';
const SUPERDOT = '\u2B24';
const SPACE = ' ';
const CRASH = '\u1F4A5';
const APPLE = '\uD83C\uDF4E';
const DOT_VALUE = 1;
export class Map {
    constructor(map) {
        this.map = map;
        this.rows = map.length;
        this.columns = map[0].length;
        this.pacman = new Pacman(1, 29);
        this.ghost = new Ghost(25, 2);
        this.apple = new Apple(15, 29);
        this.superDot1 = new superDot(1, 26);
        this.superDot2 = new superDot(26, 26);
        this.superDot3 = new superDot(1, 8);
        this.superDot4 = new superDot(26, 8);
    }

    changeValue(positionX, positionY, value) {
        this.map[positionY][positionX] = value;
    }

    getValue(positionX, positionY) {
        return this.map[positionY][positionX];
    }

    printLenght(i) {
        return this.map[i].length;
    }

    printMap(positionXPacman, positionYPacman, positionXGhost, positionYGhost,) {
        let arrText = '';
        process.stdout.write(CLEAR);
        for (let i = 0; i < this.rows; i++) {
            for (let k = 0; k < this.columns; k++) {
                if (positionYPacman == positionXGhost && positionXPacman == positionYGhost) {
                    arrText += ' ' + CRASH + ' ';
                } else {
                    if (positionYPacman == i && positionXPacman == k) {
                        //arrText += GHOST + '  ';
                        arrText += ' ' + PACMAN + ' ';
                    } else {
                        if (this.map[i][k] == 0) {
                            arrText += BLOCK + BLOCK + BLOCK;
                        } else if ((this.map[i][k] == 1)) {
                            arrText += ' ' + DOT + ' ';
                        } else if ((this.map[i][k] == 2) || (this.map[i][k] == 3)) {
                            arrText += SPACE + '  ';
                        } else if ((this.map[i][k] == 4)) {
                            arrText += ' ' + 'O' + ' ';
                        }
                        if (positionYGhost == i && positionXGhost == k) {
                            arrText = '';
                            arrText += ' ' + GHOST + ' ';
                        }
                        if (this.apple.getPositionY() == i && this.apple.getPositionX() == k && this.apple.getnotEaten() == true) {
                            arrText = '';
                            arrText += ' ' + APPLE;
                        }
                        if (this.apple.getPositionY() == i && this.apple.getPositionX() == k && this.apple.getnotEaten() == false) {
                            arrText = '';
                            arrText += SPACE + '  ';
                        }
                        if (this.superDot1.getPositionY() == i && this.superDot1.getPositionX() == k && this.superDot1.getnotEaten() == true) {
                            arrText = '';
                            arrText += ' ' + SUPERDOT + ' ';
                        }
                        if (this.superDot1.getPositionY() == i && this.superDot1.getPositionX() == k && this.superDot1.getnotEaten() == false) {
                            arrText = '';
                            arrText += SPACE + '  ';
                        }
                        if (this.superDot2.getPositionY() == i && this.superDot2.getPositionX() == k && this.superDot2.getnotEaten() == true) {
                            arrText = '';
                            arrText += ' ' + SUPERDOT + ' ';
                        }
                        if (this.superDot2.getPositionY() == i && this.superDot2.getPositionX() == k && this.superDot2.getnotEaten() == false) {
                            arrText = '';
                            arrText += SPACE + '  ';
                        }
                        if (this.superDot3.getPositionY() == i && this.superDot3.getPositionX() == k && this.superDot3.getnotEaten() == true) {
                            arrText = '';
                            arrText += ' ' + SUPERDOT + ' ';
                        }
                        if (this.superDot3.getPositionY() == i && this.superDot3.getPositionX() == k && this.superDot3.getnotEaten() == false) {
                            arrText = '';
                            arrText += SPACE + '  ';
                        }
                        if (this.superDot4.getPositionY() == i && this.superDot4.getPositionX() == k && this.superDot4.getnotEaten() == true) {
                            arrText = '';
                            arrText += ' ' + SUPERDOT + ' ';
                        }
                        if (this.superDot4.getPositionY() == i && this.superDot4.getPositionX() == k && this.superDot4.getnotEaten() == false) {
                            arrText = '';
                            arrText += SPACE + '  ';
                        }
                    }
                }
                process.stdout.write(arrText);
                arrText = '';
            }
            process.stdout.write('\n');
        }
    }

    redrawMap() {
        this.pacman.selectFreeDirection(this.map);
        this.ghost.selectFreeDirection(this.map);
        this.checkContentsCell(this.pacman.positionX, this.pacman.positionY);

        if (this.apple.eaten(this.pacman.positionX, this.pacman.positionY) && this.apple.getnotEaten()) {
            this.changeValue(this.apple.positionX, this.apple.positionY, 2);
            this.apple.notEaten = false;
            this.pacman.score += 700;
        }
        if (this.superDot1.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot1.getnotEaten()) {
            this.changeValue(this.superDot1.positionX, this.superDot1.positionY, 2);
            this.superDot1.notEaten = false;
            //should return a flag to make gosth blue
        }
        if (this.superDot2.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot2.getnotEaten()) {
            this.changeValue(this.superDot2.positionX, this.superDot2.positionY, 2);
            this.superDot2.notEaten = false;
            //should return a flag to make gosth blue
        }
        if (this.superDot3.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot3.getnotEaten()) {
            this.changeValue(this.superDot3.positionX, this.superDot3.positionY, 2);
            this.superDot1.notEaten = false;
            //should return a flag to make gosth blue
        }
        if (this.superDot4.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot4.getnotEaten()) {
            this.changeValue(this.superDot4.positionX, this.superDot4.positionY, 2);
            this.superDot4.notEaten = false;
            //should return a flag to make gosth blue
        }       
        this.pacman.checkLimitsMap(27, 14);
        this.ghost.checkLimitsMap(27, 14);
        this.pacman.movePacman();
        if (this.pacman.edible) {
            if (this.ghost.eat(this.pacman.positionX, this.pacman.positionY)) {
                this.pacman.resetToInitialPosition();
                this.ghost.resetToInitialPosition();
                this.pacman.life -= 1;
                if (this.pacman.life < 0) {
                    clearInterval();
                    process.stdout.write('GAMEOVER');
                }
            } else {
                this.ghost.movePacman();
            }
        }
        this.printMap(this.pacman.positionX, this.pacman.positionY, this.ghost.positionX, this.ghost.positionY);
        process.stdout.write('Score: ' + this.pacman.score);
        process.stdout.write('\n');
        process.stdout.write('Life: ' + this.pacman.life);
        process.stdout.write('\n');
        process.stdout.write('Pacman: ' + this.pacman.positionX + ' , ' + this.pacman.positionY);
        process.stdout.write('\n');
        process.stdout.write('Ghost: ' + this.ghost.positionX + ' , ' + this.ghost.positionY);
        process.stdout.write('\n');
        return this.map;
    }

    checkContentsCell(positionX, positionY) {
        if (this.getValue(positionX, positionY) == DOT_VALUE) {
            this.pacman.eatFoot(10);
            this.changeValue(positionX, positionY, 2);
        }
    }
}
