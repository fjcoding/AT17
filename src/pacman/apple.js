
export class Apple {
    constructor(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
        this.notEaten = true;
        this.icon = '\x1b[93m\uD83C\uDF4E\x1b[39m';
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

    random () {
        let max = 28;
        let min = 0;
        return Math.random() * (max - min) + min;
    }

    eaten(positionX, positionY) {
        if (positionX == this.positionX && positionY == this.positionY) {
            return true;
        } else {
            return false;
        }
    }
    setIcon(posX, posY,arrText){
        let res = arrText;
        if (this.getPositionX() == posX && this.getPositionY() == posY  && this.getnotEaten() == true) {
            res = '';
            res += ' ' + this.icon;
        }
        if(this.getPositionY() == posY && this.getPositionX() == posX && this.getnotEaten() == false){
            res = '';
            res += '   ';
        }
        return res;
    }
}