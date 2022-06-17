export class superDot {
    constructor(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
        this.notEaten = true;
    }

    getPositionX() {
        return this.positionX;
    }

    getPositionY() {
        return this.positionY;
    }

    getnotEaten() {
        return this.notEaten;
    }

    setPosition(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
    }

    eaten(positionX, positionY) {
        if (positionX == this.positionX && positionY == this.positionY) {
            return true;
        } else {
            return false;
        }
    }
}