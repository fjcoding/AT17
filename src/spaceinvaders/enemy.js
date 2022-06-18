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
        return this.content;
    }


    setDirectionRight() {
        this.direction = RIGHT;
    }

    setDirectionLeft() {
        this.direction = LEFT;
    }

    updateAlien(banderaRow, banderaCol) {
        if (this.direction == LEFT) {
            this.setAlien(this.x - banderaRow, this.y + banderaCol);
        }
    }
}
