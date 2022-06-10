export const LEFT = 0;
export const UP = 1;
export const RIGHT = 2;
export const DOWN = 3;

export class Pacman {
    constructor(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
        this.direction = RIGHT;
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    getDirection() {
        return this.direction;
    }

    setPosition(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
    }

    movePacman() {
        switch (this.direction) {
        case LEFT:
            this.positionX--;
            break;
        case UP:
            this.positionY--;
            break;
        case RIGHT:
            this.positionX++;
            break;
        case DOWN:
            this.positionY++;
            break;
        }
    }
}