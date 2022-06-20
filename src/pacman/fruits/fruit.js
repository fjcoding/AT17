
export class Fruit {
    constructor(map) {
        this.positionX;
        this.positionY;
        this.notEaten = true;
        this.setPosition(map);
        this.icon;
        this.points;
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

    getIcon() {
        return this.icon;
    }

    getPoints() {
        return this.points;
    }

    setPosition(map) {
        let flag = true;
        while (flag) {
            let posX = this.random();
            let posY = this.random();
            if (map[posY][posX] == 1) {
                this.positionX = posX;
                this.positionY = posY;
                flag = false;
            }
        }
    }

    random () {
        let max = 28;
        let min = 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    eaten(positionX, positionY) {
        if (positionX == this.positionX && positionY == this.positionY) {
            return true;
        } else {
            return false;
        }
    }
}