export class Bullet {
    constructor(x, y, content) {
        this.x = x;
        this.y = y;
        this.content = content;
    }

    setBulletPlayer(x, y) {
        this.content[x][y] = ' ¡ ';
        return this.content;
    }

    setBulletAlien(x, y) {
        this.content[x][y] = ' ! ';
        return this.content;
    }

    getPosX() {
        return this.x;
    }

    getPosY() {
        return this.y;
    }

    getPosXAlien() {
        return this.x;
    }

    moveBulletPlayer() {
        this.setBulletPlayer(this.x++, this.y);
    }

    moveBulletAlien() {
        this.setBulletAlien(this.x--, this.y);
    }
}
