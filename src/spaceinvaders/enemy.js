
export class Alien {
    constructor(x, y, content) {
        this.x = x;
        this.y = y;
        this.content = content;
    }

    setAlien(x, y) {
        this.content[x][y] = ' A ';
        return this.content;
    }

    moveAlienRigthDown(banderaRow, banderaCol, flag) {
        if (flag) {
            this.setAlien(this.x - banderaRow, this.y + banderaCol);
        } else {
            this.setAlien(this.x - banderaRow, this.y - banderaCol);
        }
    }
}
