export class Player {
    constructor(x, y, content, element, flag) {
        this.x = x;
        this.y = y;
        this.content = content;
        this.element = element;
        this.setPlayer(content, element);
        this.flag = flag;
    }

    setPlayer(content, element) {
        content[this.x][this.y] = element;
        return content;
    }

    getPosX() {
        return this.x;
    }

    getPosY() {
        return this.y;
    }

    walkToRight() {
        this.y += 1;
    }

    walkToLeft() {
        this.y -= 1;
    }


    stop () {
        return this.y;
    }

    changeFlag() {
        return this.flag;
    }

    changeDirection(flag, col, posInitial) {
        if (flag == true && this.y < col) {
            this.walkToRight();
            if (this.y == col) {
                this.flag = false;
            } else {
                if (Math.random() > 0.75) {
                    this.flag = false;
                }
            }
        } else if (flag == false && this.y > 0) {
            this.walkToLeft();
            if (this.y == posInitial) {
                this.flag = true;
            } else {
                if (Math.random() > 0.75) {
                    this.flag = true;
                }
            }
        }
        return this.y;
    }
}