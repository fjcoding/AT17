import { Actor, UP } from './actor.js';

export class Ghost extends Actor {
    constructor(posX, posY) {
        super(posX, posY);
        this.direction = UP;
        this.edible = false;
    }

    
}