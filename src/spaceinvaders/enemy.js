
export class Alien {
    constructor(x, y, content) {
        this.x = x;
        this.y = y;
        this.content = content;
    }

    setAlien(x, y) {
        this.y = y;
        this.x = x;
        this.content[x][y] = ' A ';
        return this.content;
    }

    getPosX() {
        return this.x;
    }

    getPosY() {
        return this.y;
    }

    printAlien() {
        this.content[this.x][this.y] = ' A ';
    }

    moveAlien(banderaRow, banderaCol, flag) {
        if (flag) {
            this.setAlien(this.x - banderaRow, this.y + banderaCol);
        } else {
            this.setAlien(this.x - banderaRow, this.y - banderaCol);
        }
    }
}