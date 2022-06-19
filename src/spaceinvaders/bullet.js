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

    setBulletAlien(x, y) {
        this.content[x][y] = ' | ';
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

    moveBullet() {
        this.setBullet(this.x++, this.y);
        //this.x = this.x +1 ;
    }

    moveBulletAlien() {
        this.setBullet(this.x--, this.y);
    }
}
