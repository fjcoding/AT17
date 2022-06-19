
export class Alien {
    constructor(x, y, content) {
        this.x = x;
        this.y = y;
        this.a = this.x;
        this.b = this.y;
        this.content = content;
    }

    setAlien(flagCol, flagRow) {
        if (flagCol && flagRow) {
            this.y = this.y + 1;
            this.content[this.x][this.y] = ' A ';
        } else if (flagCol && !flagRow) {
            this.x = this.x - 1;
            this.content[this.x][this.y] = ' A ';
        } else if (!flagCol && flagRow) {
            this.y = this.y - 1;
            this.content[this.x][this.y] = ' A ';
        } else if (!flagCol && !flagRow) {
            this.x = this.x - 1;
            this.content[this.x][this.y] = ' A ';
        }
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

    moveAlien(flagCol, flagRow) {
        this.setAlien(flagCol, flagRow);
    }
}
