
export class Apple {
    constructor(posX, posY) {
        this.positionX=posX;
        this.positionY=posY; 
        this.notEaten=true;
        this.id=5;
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
    random = function() {
        let max=28;
        let min=0;
        return Math.random() * (max - min) + min;
    }
    eaten(positionX, positionY) {
        if (positionX == this.positionX && positionY == this.positionY) {
            return true;
        } else {
            return false;
        }
    }

}