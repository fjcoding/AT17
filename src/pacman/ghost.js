import { Pacman, UP } from './pacman.js';

export class Ghost extends Pacman {
    constructor(posX, posY) {
        super(posX, posY);
        this.direction = UP;
        this.edible = false;
    }
}