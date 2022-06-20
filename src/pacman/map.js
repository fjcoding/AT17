import { Pacman } from './pacman.js';
import { Ghost } from './ghost.js';
import { Apple } from './apple.js';
import { superDot } from './superdot.js';
import { Screen } from './screen.js';
const CLEAR = '\x1Bc';
const BLOCK = '\x1b[44m\u2592\x1b[49m';
const DOT = '\x1b[95m•\x1b[39m';
const SPACE = ' ';
const CRASH = '\u1F4A5';
const APPLE = '\x1b[93m\uD83C\uDF4E\x1b[39m';
const DOT_VALUE = 1;
const VOID = 2;
const LIMIT_AXIS_X = 27;
const LIMIT_AXIS_Y = 14;
const HEARD = '\u2665';
export let TEST = false;
export class Map {
    constructor(map) {
        this.map = map;
        this.rows = map.length;
        this.columns = map[0].length;
        this.pacman = new Pacman(1, 29);
        this.ghost = new Ghost(25, 2);
        this.ghost2 = new Ghost(1, 2);
        this.ghost3 = new Ghost(25, 29);
        this.apple = new Apple(15, 29);
        this.superDot1 = new superDot(1, 26);
        this.superDot2 = new superDot(26, 26);
        this.superDot3 = new superDot(1, 8);
        this.superDot4 = new superDot(26, 8);
        this.screen = new Screen();
        this.countGameOver = 0;
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
                        arrText += ' ' + this.pacman.getIconWithColor() + ' ';
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
                        if (this.ghost.positionY == i && this.ghost.positionX == k) {
                            arrText = '';
                            arrText += ' ' + this.ghost.getIconWithColor() + ' ';
                        }

                        if (this.ghost2.positionY == i && this.ghost2.positionX == k) {
                            arrText = '';
                            arrText += ' ' + this.ghost2.getIconWithColor() + ' ';
                        }
                        if (this.ghost3.positionY == i && this.ghost3.positionX == k) {
                            arrText = '';
                            arrText += ' ' + this.ghost3.getIconWithColor() + ' ';
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
                            arrText += ' ' + this.superDot1.getIconWithColor() + ' ';
                        }
                        if (this.superDot1.getPositionY() == i && this.superDot1.getPositionX() == k && this.superDot1.getnotEaten() == false) {
                            arrText = '';
                            arrText += SPACE + '  ';
                        }
                        if (this.superDot2.getPositionY() == i && this.superDot2.getPositionX() == k && this.superDot2.getnotEaten() == true) {
                            arrText = '';
                            arrText += ' ' + this.superDot2.getIconWithColor() + ' ';
                        }
                        if (this.superDot2.getPositionY() == i && this.superDot2.getPositionX() == k && this.superDot2.getnotEaten() == false) {
                            arrText = '';
                            arrText += SPACE + '  ';
                        }
                        if (this.superDot3.getPositionY() == i && this.superDot3.getPositionX() == k && this.superDot3.getnotEaten() == true) {
                            arrText = '';
                            arrText += ' ' + this.superDot3.getIconWithColor() + ' ';
                        }
                        if (this.superDot3.getPositionY() == i && this.superDot3.getPositionX() == k && this.superDot3.getnotEaten() == false) {
                            arrText = '';
                            arrText += SPACE + '  ';
                        }
                        if (this.superDot4.getPositionY() == i && this.superDot4.getPositionX() == k && this.superDot4.getnotEaten() == true) {
                            arrText = '';
                            arrText += ' ' + this.superDot4.getIconWithColor() + ' ';
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

        if (!TEST) {
            this.ghost2.selectFreeDirection(this.map);
            this.ghost3.selectFreeDirection(this.map);
        }
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
            this.superDot3.notEaten = false;
            //should return a flag to make gosth blue
        }
        if (this.superDot4.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot4.getnotEaten()) {
            this.changeValue(this.superDot4.positionX, this.superDot4.positionY, 2);
            this.superDot4.notEaten = false;
            //should return a flag to make gosth blue
        }
        this.pacman.checkLimitsMap(LIMIT_AXIS_X, LIMIT_AXIS_Y);

        if (!TEST) {
            this.ghost2.checkLimitsMap(LIMIT_AXIS_X, LIMIT_AXIS_Y);
            this.ghost3.checkLimitsMap(LIMIT_AXIS_X, LIMIT_AXIS_Y);
        }
        this.ghost.checkLimitsMap(LIMIT_AXIS_X, LIMIT_AXIS_Y);

        this.pacman.move();

        if (!TEST) {
            this.ghost2.checkAttack(this.pacman);
            this.ghost3.checkAttack(this.pacman);
        }
        this.ghost.checkAttack(this.pacman);

        if (this.pacman.getLife() < 0) {
            this.countGameOver += 1;
            clearInterval();
            this.screen.printGameOver();
            process.exit();
        } else {
            this.printMap(this.pacman.positionX, this.pacman.positionY, this.ghost.positionX, this.ghost.positionY);
            process.stdout.write('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
            process.stdout.write('   \x1b[91mLIFE: ' + HEARD + ' ' + this.pacman.life + '\x1b[39m' + '\t\t\t\t\t\t\t\t' + '\x1b[97mSCORE: ' + this.pacman.score + '\x1b[39m\n');
        }
        return this.map;
    }

    checkContentsCell(positionX, positionY) {
        if (this.getValue(positionX, positionY) == DOT_VALUE) {
            this.pacman.eatFoot(10);
            this.changeValue(positionX, positionY, VOID);
        }
    }

    getTest() {
        return TEST;
    }

    setTest(value) {
        TEST =  value;
    }
}