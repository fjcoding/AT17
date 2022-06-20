
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
            let posX = this.random(map);
            let posY = this.random(map);
            if (map[posY][posX] == 1) {
                this.positionX = posX;
                this.positionY = posY;
                flag = false;
            }
        }
    }

    random (map) {
        let max = map.length - 1;
        let min = 0;
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