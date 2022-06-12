import { RIGHT, LEFT, UP, DOWN } from './pacman.js';
import { Pacman } from './pacman.js';
import { Ghost } from './ghost.js';

const CLEAR = '\x1Bc';
const PACMAN = '\u15E7';
// const GHOST = '\u2126';
const GHOST = '\u15E3';
const BLOCK = '\u2592';
const DOT = '•';
const SPACE = ' ';
const CRASH = '\u1F4A5';

export class Map {
    constructor(map) {
        this.map = map;
        this.rows = map.length;
        this.columns = map[0].length;
        this.pacman = new Pacman(1, 29);
        this.ghost = new Ghost(14, 11);
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
                    }
                    if (positionYGhost == i && positionXGhost == k) {
                        arrText = '';
                        arrText += ' ' + GHOST + ' ';
                    }
                }
                process.stdout.write(arrText);
                arrText = '';
            }
            process.stdout.write('\n');
        }
    }

    checkPath(positionX, positionY, direction) {
        return this.checkCorners(direction, positionX, positionY);
    }

    checkCorners(direction, positionX, positionY) {
        // switch (direction) {
        // case RIGHT:
        //     return this.checkRight(positionX, positionY);
        // case LEFT:
        //     return this.checkLeft(positionX, positionY);
        // case UP:
        //     return this.checkUp(positionX, positionY);
        // case DOWN:
        //     return this.checkDown(positionX, positionY);
        // }
        return this.returnRouteDireccion(positionX, positionY, direction);
    }

    // checkRight(positionX, positionY) {
    //     if (this.map[positionY][positionX + 1] == 1) {
    //         return RIGHT;
    //     } else if (this.map[positionY - 1][positionX] == 1) {
    //         return UP;
    //     } else if (this.map[positionY + 1][positionX] == 1) {
    //         return DOWN;
    //     } else if (this.map[positionY][positionX + 1] == 2) {
    //         return RIGHT;
    //     } else if (this.map[positionY - 1][positionX] == 2) {
    //         return UP;
    //     } else if (this.map[positionY + 1][positionX] == 2) {
    //         return DOWN;
    //     } else if (positionX == this.columns - 1) {
    //         return RIGHT;
    //     }
    // }

    // checkLeft(positionX, positionY) {
    //     if (this.map[positionY][positionX - 1] == 1) {
    //         return LEFT;
    //     } else if (this.map[positionY - 1][positionX] == 1) {
    //         return UP;
    //     } else if (this.map[positionY + 1][positionX] == 1) {
    //         return DOWN;
    //     } else if (this.map[positionY][positionX - 1] == 2) {
    //         return LEFT;
    //     } else if (this.map[positionY - 1][positionX] == 2) {
    //         return UP;
    //     } else if (this.map[positionY + 1][positionX] == 2) {
    //         return DOWN;
    //     } else if (positionX == 0) {
    //         return LEFT;
    //     }
    // }

    // checkUp(positionX, positionY) {
    //     if (this.map[positionY - 1][positionX] == 1) {
    //         return UP;
    //     } else if (this.map[positionY][positionX + 1] == 1) {
    //         return RIGHT;
    //     } else if (this.map[positionY][positionX - 1] == 1) {
    //         return LEFT;
    //     } else if (this.map[positionY - 1][positionX] == 2) {
    //         return UP;
    //     } else if (this.map[positionY][positionX + 1] == 2) {
    //         return RIGHT;
    //     } else if (this.map[positionY][positionX - 1] == 2) {
    //         return LEFT;
    //     }
    // }

    // checkDown(positionX, positionY) {
    //     if (this.map[positionY + 1][positionX] == 1) {
    //         return DOWN;
    //     } else if (this.map[positionY][positionX + 1] == 1) {
    //         return RIGHT;
    //     } else if (this.map[positionY][positionX - 1] == 1) {
    //         return LEFT;
    //     } else if (this.map[positionY + 1][positionX] == 2) {
    //         return DOWN;
    //     } else if (this.map[positionY][positionX + 1] == 2) {
    //         return RIGHT;
    //     } else if (this.map[positionY][positionX - 1] == 2) {
    //         return LEFT;
    //     }
    // }

    redrawMap() {
        this.pacman.direction = this.checkPath(this.pacman.positionX, this.pacman.positionY, this.pacman.direction);
        this.ghost.direction = this.checkPath(this.ghost.positionX, this.ghost.positionY, this.ghost.direction);
        if (this.getValue(this.pacman.positionX, this.pacman.positionY) == 1) {
            this.changeValue(this.pacman.positionX, this.pacman.positionY, 2);
            this.pacman.score += 10;
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
    * @param direction - the direction the "actor" is currently facing.
    * @returns an array of directions that are free to move to.
    */
    getFreeDirection(positionX, positionY, routeFree) {
        let freeDirection = [];
        if (this.map[positionY][positionX + 1] == routeFree) {
            freeDirection.push(RIGHT);
        }
        if (this.map[positionY - 1][positionX] == routeFree) {
            freeDirection.push(UP);
        }
        if (this.map[positionY + 1][positionX] == routeFree) {
            freeDirection.push(DOWN);
        }
        if (this.map[positionY][positionX - 1] == routeFree) {
            freeDirection.push(LEFT);
        }
        if (positionX == 0) {
            freeDirection.push( LEFT);
        } else if (positionX == this.columns - 1) {
            freeDirection.push( RIGHT);
        }
        return freeDirection;
    }

    /**
     * If the direction is left, the opposite direction is right. If the direction is up, the opposite
     * direction is down. If the direction is down, the opposite direction is up
     * @param direction - The direction the "actor" is currently moving in.
     * @returns The opposite direction of the direction passed in.
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
     * It returns a random direction from an array of directions that are free
     * @param positionX - The X position of the Actor.
     * @param positionY - The Y position of the Actor
     * @param direction - The direction the Actor is facing.
     * @returns the direction of the next movement of the ghost.
     */
    returnRouteDireccion(positionX, positionY, direction) {
        let newDireccion = direction;
        let arrayDirections = this.getFreeDirection(positionX, positionY, 1);
        if (arrayDirections.length == 0) {
            arrayDirections = this.getFreeDirection(positionX, positionY, 2);
        }
        if (!arrayDirections.includes(direction)) {
            let indexDirection = Math.floor(Math.random() * (1 + (arrayDirections.length)));
            newDireccion = arrayDirections[indexDirection];
        }
        return newDireccion;
    }

   
}