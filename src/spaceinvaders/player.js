export const RIGTH = 'right';
export const LEFT  = 'left';

export class Player {
    constructor(posX, posY, content, element, direction) {
        this.posX = posX;
        this.posY = posY;
        this.content = content;
        this.element = element;
        this.setPlayer(content, element);
        this.direction = direction;
    }

    setPlayer(content, element) {
        content[this.x][this.posY] = element;
        return content;
    }

    walkToRight() {
        this.posY += 1;
    }

    walkToLeft() {
        this.posY -= 1;
    }

    move(leftLimit, rightLimit) {
        const canMoveToRight = this.posY < rightLimit;  // estos pueden ser funciones
        const canMoveToLeft = this.posY > leftLimit;
        if (this.isMovingTo(RIGTH) && canMoveToRight) {
            this.walkToRight();
            const hasReachedTheLimit = this.posY == rightLimit;
            if (hasReachedTheLimit) {
                this.ChangeDirection(LEFT);
            }
        } else if (this.isMovingTo(LEFT) && canMoveToLeft) {
            this.walkToLeft();
            const hasReachedTheLimit = this.posY == leftLimit;
            if (hasReachedTheLimit) {
                this.flag = true;
            }
        }
        return this.posY;
    }

    static isMovingTo(targetDirection) {
        return this.direction === targetDirection; //devuelve true o false
    }

    static ChangeDirection(targetDirection) {
        this.direction = targetDirection;
    }
}