import { Pacman } from './pacman.js';
import { Ghost } from './ghost.js';
import { Apple } from './apple.js';
import { superDot } from './superdot.js';
import { Screen } from './screen.js';
const CLEAR = '\x1Bc';
const BLOCK = '\x1b[44m\u2592\x1b[49m';
const DOT = '\x1b[95m•\x1b[39m';
const SPACE = ' ';
const DOT_VALUE = 1;
const VOID = 2;
const LIMIT_AXIS_X = 27;
const LIMIT_AXIS_Y = 14;
const HEARD = '\x1b[91m♥\x1b[39m';
export class Map {
    constructor(map) {
        this.map = map;
        this.rows = map.length;
        this.columns = map[0].length;
        this.pacman = new Pacman(14, 18);
        this.blinky = new Ghost(15, 12);
        this.pinky = new Ghost(14, 11);
        this.inky = new Ghost(13, 11);
        this.clyde = new Ghost(12, 12);
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

    printMap() {
        let arrText = '';
        process.stdout.write(CLEAR);
        for (let rows = 0; rows < this.rows; rows++) {
            for (let columns = 0; columns < this.columns; columns++) {
                arrText = this.printIcons(rows, columns, arrText);
                process.stdout.write(arrText);
                arrText = '';
            }
            process.stdout.write('\n');
        }
    }

    redrawMap() {
        this.pacman.selectFreeDirection(this.map);
        this.ghostSelectFreeDirection();
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
        this.pacman.selectFreeDirection(this.map);
        this.ghostCheckLimitsMap();
        this.pacman.move();
        this.ghostCheckAtack();
        if (this.pacman.getLife() < 0) {
            this.countGameOver += 1;
            clearInterval();
            this.screen.printGameOver();
            // process.stdout.write('•••••••••••••••••••••••••••••: ¡¡¡ GAME OVER !!! :••••••••••••••••••••••••••••••••••••\n\n');
            process.exit();
        } else {
            this.printMap();
            process.stdout.write('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
            process.stdout.write('   LIFE: ' + HEARD + ' ' + this.pacman.life + '\t\t\t\t\t\t\t\t' + 'SCORE: ' + this.pacman.score + '\n');
        }
        return this.map;
    }

    checkContentsCell(positionX, positionY) {
        if (this.getValue(positionX, positionY) == DOT_VALUE) {
            this.pacman.eatFoot(10);
            this.changeValue(positionX, positionY, VOID);
        }
    }

    printSuperDots(posX, posY, arrText) {
        let res = arrText;
        res = this.superDot1.setIcon(posX, posY, res);
        res = this.superDot2.setIcon(posX, posY, res);
        res = this.superDot3.setIcon(posX, posY, res);
        res = this.superDot4.setIcon(posX, posY, res);
        return res;
    }

    printBasicIcons(posX, posY, arrText) {
        let res = arrText;
        if (this.map[posX][posY] == 0) {
            res += BLOCK + BLOCK + BLOCK;
        } else if ((this.map[posX][posY] == 1)) {
            res += ' ' + DOT + ' ';
        } else if ((this.map[posX][posY] == 2) || (this.map[posX][posY] == 3)) {
            res += SPACE + '  ';
        } else if ((this.map[posX][posY] == 4)) {
            res += ' ' + 'O' + ' ';
        }
        return res;
    }

    printIcons(rows, columns, arrText) {
        let res = arrText;
        if (this.pacman.getPosY() == rows && this.pacman.getPosX() == columns) {
            res += ' ' + this.pacman.getIconWithColor() + ' ';
        } else {
            res = this.printBasicIcons(rows, columns, res);
            res = this.printGhostIcons(columns,rows,res);
            res = this.apple.setIcon(columns, rows, res);
            res = this.printSuperDots(columns, rows, res);
        }
        return res;
    }

    printGhostIcons(columns,rows,arrText){
        let res = arrText;
        res = this.blinky.printIcon(columns,rows,res);
        res = this.pinky.printIcon(columns,rows,res);
        res = this.inky.printIcon(columns,rows,res);
        res = this.clyde.printIcon(columns,rows,res);
        return res;
    }

    ghostSelectFreeDirection(){
        this.blinky.selectFreeDirection(this.map);
        this.pinky.selectFreeDirection(this.map);
        this.inky.selectFreeDirection(this.map);
        this.clyde.selectFreeDirection(this.map);
    }
    
    ghostCheckLimitsMap(){
        this.blinky.checkLimitsMap(LIMIT_AXIS_X, LIMIT_AXIS_Y);
        this.pinky.checkLimitsMap(LIMIT_AXIS_X, LIMIT_AXIS_Y);
        this.inky.checkLimitsMap(LIMIT_AXIS_X, LIMIT_AXIS_Y);
        this.clyde.checkLimitsMap(LIMIT_AXIS_X, LIMIT_AXIS_Y);
    }
    
    ghostCheckAtack(){
        this.blinky.checkAttack(this.pacman);
        this.pinky.checkAttack(this.pacman);
        this.inky.checkAttack(this.pacman);
        this.clyde.checkAttack(this.pacman);
    }

}
