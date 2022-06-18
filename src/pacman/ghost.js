import { Actor, UP } from './actor.js';

export class Ghost extends Actor {
    constructor(posX, posY) {
        super(posX, posY);
        this.direction = UP;
        this.edible = false;
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
}