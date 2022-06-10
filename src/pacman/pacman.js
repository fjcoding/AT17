export const LEFT = 0;
export const UP = 1;
export const RIGHT = 2;
export const DOWN = 3;

export class Pacman {
    constructor(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
        this.direction = RIGHT;
        this.edible = true;
        this.score = 0;
        this.initialPositionX = posX;
        this.initialPositionY = posY;
        this.life = 2;
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

    changeEdible() {
        this.edible = !this.edible;
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

    eat(positionX, positionY) {
        if (positionX == this.positionX && positionY == this.positionY) {
            return true;
        } else {
            return false;
        }
    }

    resetToInitialPosition() {
        this.positionX = this.initialPositionX;
        this.positionY = this.initialPositionY;
    }
}