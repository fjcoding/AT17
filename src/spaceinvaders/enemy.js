
export class Alien {
    constructor(x, y, content) {
        this.x = x;
        this.y = y;
        this.a = this.x;
        this.b = this.y;
        this.content = content;
    }

    setAlien(x, y) {
        this.y = y;
        this.x = x;
        this.content[x][y] = ' A ';
        return this.content;
    }

    restoreLocation() {
        this.y = this.b;
        this.x = this.a;
        this.content[this.x][this.y] = ' A ';
    }

    getPosX() {
        return this.x;
    }

    getPosY() {
        return this.y;
    }

    printAlien() {
        this.content[this.x][this.y] = ' A ';
        return this.content;
    }

    moveAlienDown(row) {
        this.setAlien(this.x - row, this.y);
    }

    moveAlienOneStep(flag) {
        if (flag) {
            this.setAlien(this.x, this.y + 1);
        } else {
            this.setAlien(this.x, this.y - 1);
        }
    }
}
