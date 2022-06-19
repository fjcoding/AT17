import { Player } from './player.js';


export class Boss extends Player {
    changeElement() {
        //this.element = ' $ ';
        return this.element;

        /* if (Math.random() < 0.38) {
            this.element = '   ';
            return this.element;
        } else {
            this.element = ' $ ';
            return this.element;
        }*/
    }


    changeDirectionBoss(flag, col, posInitial) {
        if (flag == true && this.y < col) {
            this.walkToRight();
            if (this.y == col) {
                this.flag = false;
            }
        } else if (flag == false && this.y > 0) {
            this.walkToLeft();
            if (this.y == posInitial) {
                this.flag = true;
            }
        }
        return this.y;
    }
}

