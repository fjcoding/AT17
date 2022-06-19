import { Player } from './player.js';


export class Boss extends Player {
    changeElement() {
        return this.element;
    }

    noBonus() {
        this.element = '   ';
    }

    changeDirectionBoss(flag, col, posInitial) {
        if (flag == true && this.y < col) {
            this.walkToRight();
            if (this.y == col) {
                this.element = '   ';
                this.flag = false;
            }
        } else if (flag == false && this.y > 0) {
            this.walkToLeft();
            if (this.y == posInitial) {
                this.element = ' $ ';
                this.flag = true;
            }
        }
        return this.y;
    }
}

