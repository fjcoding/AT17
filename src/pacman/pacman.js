import {Actor} from './actor.js';

export class Pacman extends Actor {
    constructor(posX, posY) {
        super(posX, posY);
        this.score = 0;
        this.life = 2;
    }
}