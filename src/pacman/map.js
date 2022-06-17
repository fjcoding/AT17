import { RIGHT, LEFT, UP, DOWN } from './actor.js';
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
export class Map {
    constructor(map) {
        this.map = map;
        this.rows = map.length;
        this.columns = map[0].length;
        this.pacman = new Pacman(1, 29);
        this.ghost = new Ghost(14, 11);
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
        this.pacman.direction = this.getPacmanRoute(this.pacman.positionX, this.pacman.positionY, this.pacman.direction);
        this.ghost.direction = this.getGhostRoute(this.ghost.positionX, this.ghost.positionY, this.ghost.direction);
        if (this.getValue(this.pacman.positionX, this.pacman.positionY) == 1) {
            this.changeValue(this.pacman.positionX, this.pacman.positionY, 2);
            this.pacman.score += 10;
        }
        if (this.apple.eaten(this.pacman.positionX, this.pacman.positionY) && this.apple.getnotEaten()) {
            this.changeValue(this.apple.positionX, this.apple.positionY, 2);
            this.apple.notEaten = false;
            this.pacman.score += 700;
        }
        if (this.superDot1.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot1.getnotEaten()) {
            this.changeValue(this.superDot1.positionX, this.superDot1.positionY, 2);
            this.superDot1.notEaten = false;
            //this.pacman.score += 700; should return a flag to make blue the gosth 
        }
        if (this.superDot2.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot2.getnotEaten()) {
            this.changeValue(this.superDot2.positionX, this.superDot2.positionY, 2);
            this.superDot2.notEaten = false;
            //this.pacman.score += 700; should return a flag to make blue the gosth 
        }
        if (this.superDot3.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot3.getnotEaten()) {
            this.changeValue(this.superDot3.positionX, this.superDot3.positionY, 2);
            this.superDot1.notEaten = false;
            //this.pacman.score += 700; should return a flag to make blue the gosth 
        }
        if (this.superDot4.eaten(this.pacman.positionX, this.pacman.positionY) && this.superDot4.getnotEaten()) {
            this.changeValue(this.superDot4.positionX, this.superDot4.positionY, 2);
            this.superDot4.notEaten = false;
            //this.pacman.score += 700; should return a flag to make blue the gosth 
        }
        if (this.pacman.positionX == 27 && this.pacman.positionY == 14 && this.pacman.direction == RIGHT) {
            this.pacman.setPosition(0, 14);
        } else if (this.pacman.positionX == 0 && this.pacman.positionY == 14 && this.pacman.direction == LEFT) {
            this.pacman.setPosition(27, 14);
        }
        if (this.ghost.positionX == 27 && this.ghost.positionY == 14 && this.ghost.direction == RIGHT) {
            this.ghost.setPosition(0, 14);
        } else if (this.ghost.positionX == 0 && this.ghost.positionY == 14 && this.ghost.direction == LEFT) {
            this.ghost.setPosition(27, 14);
        }
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


    /**
    * It returns an array of directions that are free to move to
    * @param positionX - The x coordinate of the current position.
    * @param positionY - The Y coordinate of the current position.
    * @param routeFree - The character that represents a free route.
    * @param direction - the direction the "actor" is currently facing.
    * @returns an array of directions that are free to move to.
    */

    getFreeDirection(positionX, positionY, routeFree, direction) {
        let freeDirection = [];
        let oppositeDirection = this.oppositeDirection(direction);
        if (positionX == this.columns - 1) {
            freeDirection.push(RIGHT);
        } else if (this.map[positionY][positionX + 1] == routeFree && RIGHT != oppositeDirection) {
            freeDirection.push(RIGHT);
        }
        if (positionY > 0) {
            if (this.map[positionY - 1][positionX] == routeFree && UP != oppositeDirection) {
                freeDirection.push(UP);
            }
        }
        if (positionY < this.rows - 1) {
            if (this.map[positionY + 1][positionX] == routeFree && DOWN != oppositeDirection) {
                freeDirection.push(DOWN);
            }
        }
        if (positionX == 0) {
            freeDirection.push(LEFT);
        } else if (this.map[positionY][positionX - 1] == routeFree && LEFT !== oppositeDirection) {
            freeDirection.push(LEFT);
        }
        return freeDirection;
    }

    /**
     * If the direction is left, the opposite direction is right. If the direction is up, the opposite
     * direction is down. If the direction is down, the opposite direction is up
     * @param direction - The direction the "actor" is currently moving in.
     * @returns The opposite direction to the input direction.
     */
    oppositeDirection(direction) {
        let oppositeDirection = LEFT;
        switch (direction) {
        case LEFT: oppositeDirection = RIGHT; break;
        case UP: oppositeDirection = DOWN; break;
        case DOWN: oppositeDirection = UP; break;
        }
        return oppositeDirection;
    }

    /**
     * It returns a random direction from an array of directions that are free for pacman
     * @param positionX - The X position of the pacman.
     * @param positionY - The Y position of the pacman.
     * @param direction - The direction the pacman is currently moving in.
     * @returns the direction of the next movement of the pacman.
     */
    getPacmanRoute(positionX, positionY, direction) {
        let arrayDirections = this.getFreeDirection(positionX, positionY, 1, direction);
        if (arrayDirections.length == 0) {
            arrayDirections = this.getFreeDirection(positionX, positionY, 2, direction);
        }
        let newDireccion = arrayDirections[0];
        if (arrayDirections.length > 1) {
            let indexDirection = Math.floor(Math.random() * (1 + (arrayDirections.length - 1)));
            newDireccion = arrayDirections[indexDirection];
        }
        return newDireccion;
    }

    /**
     * It returns a random direction from the array of free directions for the ghost
     * @param positionX - The x position of the ghost
     * @param positionY - The Y position of the ghost.
     * @param direction - The direction the ghost is currently moving in.
     * @returns the direction of the ghost.
     */
    getGhostRoute(positionX, positionY, direction) {
        let arrayDirections = [].concat(this.getFreeDirection(positionX, positionY, 1, direction), this.getFreeDirection(positionX, positionY, 2, direction));
        let indexDirection = Math.floor(Math.random() * (1 + (arrayDirections.length - 1)));
        return arrayDirections[indexDirection];
    }
}