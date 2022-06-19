import { Actor } from './actor.js';

export class Pacman extends Actor {
    constructor(posX, posY) {
        super(posX, posY);
        this.score = 0;
        this.life = 2;
        this.icon = '\u15E7';
    }

    setScore(score) {
        this.score = score;
    }

    /**
    * It returns a random direction from an array of directions that are free for pacman
    * @param positionX - The X position of the pacman.
    * @param positionY - The Y position of the pacman.
    * @param direction - The direction the pacman is currently moving in.
    * @returns the direction of the next movement of the pacman.
    */
    selectFreeDirection(map) {
        let arrayDirections = this.listFreeDirections(map, 1);
        if (arrayDirections.length == 0) {
            arrayDirections = this.listFreeDirections(map, 2);
        }
        let newDireccion = arrayDirections[0];
        if (arrayDirections.length > 1) {
            let indexDirection = Math.floor(Math.random() * (1 + (arrayDirections.length - 1)));
            newDireccion = arrayDirections[indexDirection];
        }
        this.setDirection(newDireccion);
    }

    eatFoot(value) {
        if (value > 0) {
            this.setScore(this.score + value);
        }
    }

    getLife() {
        return this.life;
    }

    setLife(life) {
        this.life = life;
    }

    getIconWithColor() {
        return '\x1b[93m' + this.icon + '\x1b[39m';
    }
}