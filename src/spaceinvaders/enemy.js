const LEFT = 'left';
const RIGHT = 'right';


export class Alien {
    constructor(x, y, content) {
        this.x = x;
        this.y = y;
        this.dierction = 'left';
        this.content = content;
    }

    setAlien(x, y) {
        this.content[x][y] = ' A ';
    }


    setDirectionRight() {
        this.dierction = RIGHT;
    }

    setDirectionLeft() {
        this.dierction = LEFT;
    }

    updateAlien(banderaRow, banderaCol) {
        if (this.dierction == LEFT) {
            this.setAlien(this.x - banderaRow, this.y + banderaCol);
        }
    }
}
