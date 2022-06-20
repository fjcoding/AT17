import { Actor, UP } from './actor.js';

export class Ghost extends Actor {
    constructor(posX, posY) {
        super(posX, posY);
        this.direction = UP;
        this.edible = false;
        this.icon = '\u15E3';
    }

    checkAttack(pacman) {
        if (pacman.getEdible()) {
            this.attack(pacman);
            this.move();
            this.attack(pacman);
        }
    }

    attack(pacman) {
        if (this.eat(pacman.positionX, pacman.positionY)) {
            pacman.resetToInitialPosition();
            this.resetToInitialPosition();
            pacman.setLife(pacman.getLife() - 1);
        }
    }

    getIconWithColor() {
        return '\x1b[97m' + this.icon + '\x1b[39m';
    }

    printIcon(columns, rows, arrText) {
        let res = arrText;
        if (this.getPosX() == columns && this.getPosY() == rows) {
            res = '';
            res += ' ' + this.getIconWithColor() + ' ';
        }
        return res;
    }
}