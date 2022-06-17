export class Bullet {
    constructor(x, y, content) {
        this.x = x + 1;
        this.y = y;
        this.content = content;
    }

    setBullet(x, y) {
        this.content[x][y] = ' | ';
        return this.content;
    }

    getPosX() {
        return this.x;
    }

    setNullBullet() {
        this.x = 0;
        this.y = 0;
    }

    moveBullet() {
        this.setBullet(this.x++, this.y);
    }
}
