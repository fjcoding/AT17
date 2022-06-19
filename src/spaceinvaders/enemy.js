
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

    moveAlien(banderaRow, banderaCol, flag) {
        if (flag) {
            this.setAlien(this.x - banderaRow, this.y + banderaCol);
        } else {
            this.setAlien(this.x - banderaRow, this.y - banderaCol);
        }
    }
}
